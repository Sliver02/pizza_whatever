export const elements = {

    sections: document.querySelectorAll('.section'),
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchBtn: document.querySelector('.search__btn'),
    sliderPage: document.querySelector('.slider__page'),
};

export const renderLoader = parent => {
    const loader = `
    <div class="loader">
        <svg>
            <use href="img/pizza-svgrepo-com.svg"></use>
        </svg>
    </div class="loader">
    `;

    parent.insertAdjacentHTML('afterBegin',loader);
};