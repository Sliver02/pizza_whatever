// Global App Controller
import '../scss/main';
import './scrollSmooth';
import Search from './models/Search';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Linked recipes
 */
const state = {};
const controlSearch = async () => {
    // 1. get query form view
    const query = 'pizza'; //todo

    if (query) {
        // 2. new search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        console.log(state.search.result);
    }
};

document.querySelector('.search').addEventListener('click', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
// console.log(search);
search.getResults();

// import axios from 'axios';

// Models
// import str from './models/search';
// import * as searchView from './views/searchView';

// console.log(`Imported functions: ${searchView.add(searchView.ID,2)} and ${searchView.multiply(3,5)}. ${str}`);
// API url https://forkify-api.herokuapp.com

// async function getResults(query) {
//     const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
//     const recipes = res.data.recipes;
//     console.log(recipes);
// }

// getResults('pizza');