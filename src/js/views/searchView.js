import {elements} from './base';
import scroll from './scrollView';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearResults = () => {
    elements.sliderPage.innerHTML = '';
    elements.navBtns.innerHTML = '';
};

const renderPlaceHolder = () => {
    const markup = `
        <div class="place-holder">
        </div>
    `;
    elements.sliderPage.insertAdjacentHTML('beforeend', markup);
};

export const renderEmpty = recipes => {
    for (var i=0; i<7; i++) {
        renderPlaceHolder();
    }
};

const limitRecipeTitle = (title, limit = 25) => {
    const newTitle = [];

    if (title.length > limit) {

        /**
         * divide words in title by the spaces between them
         * then start a reduce method(accumulator, current)
         * in each iteration we will test if the already insterd 
         * text plus the next word will surpass the limit
         */
        
        title.split(' ').reduce((acc, cur) => {

            if (acc+cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;

        }, 0);

        return `${newTitle.join(' ')} ...`;
    }
    return title;
}

const renderResult = result => {
    
    const markup = `
        <a class="result btn btn--next" href="#${result.recipe_id}">
            <div class="result__img-wrap">
                <div class="result__img">
                    <img src="${result.image_url}" alt="thumb">
                </div>
            </div>
            <div class="result__text-wrap">
                <h2 class="result__title">
                    ${limitRecipeTitle(result.title)}
                </h2>
                <p class="result__desc">
                    ${result.publisher}
                </p>
            </div>
            <div class="result__stats">
                <div class="result__time">
                    <i class="material-icons">timer</i>
                    <span> 1:30</span>
                </div>
                <div class="result__score">
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star_half</i>
                    <i class="material-icons">star_border</i>
                    <i class="material-icons">star_border</i>
                </div>
            </div>
        </a>
    `;
    elements.sliderPage.insertAdjacentHTML('beforeend', markup);
};

const createButton = (page, type) => `
        <div class="nav__arrow nav__arrow--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
            <i class="fas fa-chevron-circle-${type === 'prev' ? 'left' : 'right'}"></i>
            <span>
                Page ${type === 'prev' ? page - 1 : page + 1}
            </span>
        </div>
    `;

const renderButtons = (page, numResults, resPage) => {
    const pages = Math.ceil(numResults / resPage);

    // console.log('all good');

    let button;
    if (page === 1) {

        button = createButton(page, 'next');

    } else if (page < pages) {

        button = `
            ${createButton(page, 'prev')} 
            ${createButton(page, 'next')}
        `;
    } else if (page === pages) {

        button = createButton(page, 'prev');
    }

    elements.navBtns.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (results, page = 1, resPage = 12) => {
    // first and last item in the recepies page
    const start = (page - 1) * resPage; 
    const end = page * resPage; 

    results.slice(start, end).forEach(renderResult);
    scroll.scrollSections();
    renderButtons(page, results.length, resPage);
};