// Global App Controller
import '../scss/main';
import scroll from './views/scrollView';
import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Linked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1. get query form view
    const query = searchView.getInput();

    if (query) {
        try {
            // 2. new search object and add to state
            state.search = new Search(query);
    
            // 3. Prepare UI for results
            searchView.clearInput();
            searchView.clearResults();
            renderLoader(elements.sliderPage);
    
            // 4. Search for recipes
            await state.search.getResults();
    
            // 5. Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);

            scroll.scrollSections();

        } catch (error) {
            // window.alert(error);
            searchView.clearInput();
            searchView.clearResults();

            searchView.renderEmpty();
        }
    }
};

searchView.renderEmpty();
scroll.scrollSections();

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


//////////////////////////////////////////////////////////////////////////////
// var slideLimit = 12;

// function multiplyPreview(count, deep) {
//     var recipe = document.querySelector('.recipe');

//     for (var i = 0, copy; i < count - 1; i++) {
//         copy = recipe.cloneNode(deep);
//         recipe.parentNode.insertBefore(copy, recipe);
//     }
// }

// function addSlide(count, deep) {
//     var page = document.querySelectorAll('.slider__page');

//     window.alert('WIP 12 max-recipes for Now!');
    
//     // for (var i=0; i < Math.round(count / slideLimit); i++) {
//     //     copy = page.cloneNode(deep);
//     //     page.parentNode.insertBefore(copy, page);
//     // }

// }

// function displayPreview(count) {

//     if (count <= slideLimit) {
//         multiplyPreview(count, true);
//     } else {
//         addSlide(count, true);
//     }

// }

// displayPreview(12);