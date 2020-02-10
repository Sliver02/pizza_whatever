// scroll to specific values,
// same as window.scroll() method.
// for scrolling a particular distance, use window.scrollBy().
// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth' 
//   });
  
// scroll certain amounts from current position 
// window.scrollBy({ 
// top: 100, // negative value acceptable
// left: 0, 
// behavior: 'smooth' 
// });

// // scroll to a certain element
// document.querySelector('.hello').scrollIntoView({ 
// behavior: 'smooth' 
// });

//var currentSection = 0;
// var start = document.getElementById('start');
// var recipes = document.getElementById('recipes');

// var btnFrwd = start.getElementsByClassName('btn--frwd')[0];
// var btnBwrd = recipes.getElementsByClassName('btn--bwrd')[0];

// console.log(btnFrwd);
// console.log(btnBwrd);

// btnFrwd.addEventListener('click', (e) => {
//     console.log('sei un coglione');
//     recipes.scrollIntoView({ 
//         behavior: 'smooth' 
//     });
// });

// btnBwrd.addEventListener('click', (e) => {
//     console.log('sei un coglione ma ALLINSU');
//     start.scrollIntoView({ 
//         behavior: 'smooth' 
//     });
// });


var sections = document.querySelectorAll('.section');

sections.forEach((section, index) => {
    var btnFrwd = section.getElementsByClassName('btn--frwd')[0];
    var btnBwrd = section.getElementsByClassName('btn--bwrd')[0];

    // console.log(index);
    // console.log(btnFrwd);
    // console.log(btnBwrd);


    if (index <= sections.length && btnFrwd != undefined) {

        // console.log('qua non entra vero scemo?');
        
        btnFrwd.addEventListener('click', (e) => {
            sections[index + 1].scrollIntoView({
                behavior: 'smooth'
            });
        });
        
    } else if (index >= 0 && btnBwrd != undefined) {

        btnBwrd.addEventListener('click', (e) => {
            sections[index - 1].scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

//*********************************** NOPE *********************/

// console.log('imported scroll smooth');

// var targets = document.querySelectorAll('.section');

// function smoothScroll(target, duration) {

//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var starTime = null;
    
//     function animation(currentTime) {
        
//         if(startTime ==null) {
//             startTime = currentTime;
//         }
        
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed,startPosition,distance,duration);
        
//         window.scrollTo(0, run);

//         if (timeElapsed < duration) {
//             requestAnimationFrame(animation);
//         }
//     }

//     /**
//      * equation to easw the animation
//      * 
//      * @param {current time} t 
//      * @param {start value} b 
//      * @param {change in value} c 
//      * @param {duration} d 
//      */
//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(animation);
// }



// targets.forEach(target => {

//     target.addEventListener('click', function() {
//         smoothScroll(document.querySelector(target));
//     });
// });