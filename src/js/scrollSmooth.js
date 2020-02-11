//var currentSection = 0;
// var start = document.getElementById('start');
// var recipes = document.getElementById('recipes');

// var btnNext = start.getElementsByClassName('btn--next')[0];
// var btnPrev = recipes.getElementsByClassName('btn--prev')[0];

// console.log(btnFrwd);
// console.log(btnPrev);

// btnFrwd.addEventListener('click', (e) => {
//     console.log('sei un coglione');
//     recipes.scrollIntoView({ 
//         behavior: 'smooth' 
//     });
// });

// btnPrev.addEventListener('click', (e) => {
//     console.log('sei un coglione ma ALLINSU');
//     start.scrollIntoView({ 
//         behavior: 'smooth' 
//     });
// });


export function scrollSections() {
    // Array of all elements with section class
    var sections = document.querySelectorAll('.section');

    // loop trhough each section to pass click events
    sections.forEach((section, index) => {

        // Select dynamically the 
        var next = section.querySelectorAll('.btn--next');
        var prev = section.querySelectorAll('.btn--prev');

        console.log(next);

        next.forEach((btnNext) => {

            if (index <= sections.length && btnNext != undefined) {
        
                var nextSection = sections[index + 1];
                
                btnNext.addEventListener('click', (e) => {
                    console.log('asd');
                    history.pushState({"id":nextSection.id}, nextSection.id, `/#${nextSection.id}`);
                    nextSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            }
        });


        prev.forEach((btnPrev) => {

            if (index >= 0 && btnPrev != undefined) {
                var prevSection = sections[index - 1];

                btnPrev.addEventListener('click', (e) => {
                    history.pushState({"id":prevSection.id}, prevSection.id, `/#${prevSection.id}`);
                    prevSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            }
        });
    });
}