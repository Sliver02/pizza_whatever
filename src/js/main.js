

// Global App Controller
import * as scroll from './scrollSmooth';
import '../scss/main';



function multiplyPreview(count, deep) {
    var node = document.querySelector('.recipes__preview');

    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

function addSlide(count, deep) {
    var node = document.querySelector('.slide');

    window.alert('WIP 12 max-recipes for Now!')

    for (var i=0; i < Math.round(count/12); i++) {

        // copy = node.cloneNode(deep);
        // node.parentNode.insertBefore(copy, node);

        // // Get the last <li> element ("Milk") of <ul> with id="myList2"
        // var itm = document.getElementById("myList2").lastChild;

        // // Copy the <li> element and its child nodes
        // var cln = itm.cloneNode(true);

        // // Append the cloned <li> element to <ul> with id="myList1"
        // document.getElementById("myList1").appendChild(cln); 
    }

}

function displayPreview(count) {

    if (count <= 12) {
        multiplyPreview(count, true);
    } else {
        addSlide(count, true)
    }

    scroll.scrollSections();
}

displayPreview(12);
