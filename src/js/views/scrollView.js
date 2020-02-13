import {elements} from './base';
 
export default {
    scrollSections() {

        // loop trhough each section to pass click events
        elements.sections.forEach((section, index) => {

            // Select dynamically the 
            var next = section.querySelectorAll('.btn--next');
            var prev = section.querySelectorAll('.btn--prev');

            console.log(next);
            console.log(prev);

            next.forEach((btnNext) => {

                if (btnNext && index <= elements.sections.length) {
            
                    var nextSection = elements.sections[index + 1];
                    
                    btnNext.addEventListener('click', (e) => {
                        history.pushState({"id":nextSection.id}, nextSection.id, `/#${nextSection.id}`);
                        nextSection.scrollIntoView(true, {
                            behavior: 'smooth'
                        });
                    });
                }
            });


            prev.forEach((btnPrev) => {

                if (btnPrev && index >= 0) {
                    var prevSection = elements.sections[index - 1];

                    btnPrev.addEventListener('click', (e) => {
                        history.pushState({"id":prevSection.id}, prevSection.id, `/#${prevSection.id}`);
                        prevSection.scrollIntoView(true, {
                            behavior: 'smooth'
                        });
                    });
                }
            });
        });
    }
};