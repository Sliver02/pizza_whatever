// Global App Controller
import '../scss/__main';
import scroll from './views/scrollView';
import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
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

        } catch (error) {
            // window.alert(error);
            alert('Error processing the search');
            searchView.clearInput();
            searchView.clearResults();

            searchView.renderEmpty();
        }
    }
};


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.sliderFooter.addEventListener('click', e => {
    const btn = e.target.closest('.nav__arrow');
    
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        // console.log(goToPage);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

searchView.renderEmpty();
scroll.scrollSections();




/**
 * RECIPE CONTROLLER
 */
// const r = new Recipe(46959);
// r.getRecipe();
// console.log(r);
 
const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    // console.log(id);

    if (id) {
        // prepare UI for changes
        recipeView.clearResults();
        renderLoader(elements.recipe);

        // create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data
            await state.recipe.getRecipe();

            // console.log(state.recipe.ingredients);
            state.recipe.parseIngredients();
    
            // calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
    
            // render recipe
            // console.log(state.recipe);
            clearLoader();
            recipeView.renderRecipe(state.recipe);

        } catch(error) {
            console.log(error);
            recipeView.clearResults();
            alert('Error processing recipe!');
        }
    }
};

window.addEventListener('hashchange', controlRecipe);

// handling recipe btn clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn--remove, .btn--remove *')) {
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('remove');
            console.log('remove serving');
        }
    } else if (e.target.matches('.btn--add, .btn--add *')) {
            state.recipe.updateServings('add');
            console.log('add serving');
    }
});