export const elements = {

    sections: document.querySelectorAll('.section'),
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchBtn: document.querySelector('.search__btn'),
    sliderPage: document.querySelector('.slider__page'),
};

export const elementStrings = {
    loader: 'loader',
}; 

export const renderLoader = parent => {
    const loader = `
    <div class="${elementStrings.loader}">
     <img src="img/pizza-svgrepo-com.svg" alt="">    
    </div>
    `;

    parent.insertAdjacentHTML('afterBegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);

    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};