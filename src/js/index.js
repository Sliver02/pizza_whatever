// Global App Controller
import '../scss/main';
import scroll from './scrollSmooth';
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
        // console.log(state.search.result);
    }
};

// document.querySelector('.search').addEventListener('click', e => {
//     e.preventDefault();
//     controlSearch();
// });

const search = new Search('pizza');
console.log(search);
search.getResults();


function multiplyPreview(count, deep) {
    var node = document.querySelector('.recipe');

    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

function addSlide(count, deep) {
    var node = document.querySelector('.slide');

    window.alert('WIP 12 max-recipes for Now!');

    // for (var i=0; i < Math.round(count/12); i++) {

    //     copy = node.cloneNode(deep);
    //     node.parentNode.insertBefore(copy, node);

    //     // Get the last <li> element ("Milk") of <ul> with id="myList2"
    //     var itm = document.getElementById("myList2").lastChild;

    //     // Copy the <li> element and its child nodes
    //     var cln = itm.cloneNode(true);

    //     // Append the cloned <li> element to <ul> with id="myList1"
    //     document.getElementById("myList1").appendChild(cln); 
    // }

}

function displayPreview(count) {

    if (count <= 12) {
        multiplyPreview(count, true);
    } else {
        addSlide(count, true);
    }

    scroll.scrollSections();
}

displayPreview(12);