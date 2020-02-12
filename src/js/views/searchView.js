import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearResults = () => elements.sliderPage.innerHTML = '';

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

const renderRecipe = recipe => {
    
    const markup = `
        <div class="recipe btn btn--next">
            <div class="recipe__img-wrap">
                <div class="recipe__thumbnail">
                    <img src="${recipe.image_url}" alt="thumb">
                </div>
            </div>
            <div class="recipe__text-wrap">
                <h2 class="recipe__title">
                    ${limitRecipeTitle(recipe.title)}
                </h2>
                <p class="recipe__desc">
                    ${recipe.publisher}
                </p>
            </div>
            <div class="recipe__stats">
                <div class="recipe__time">
                    <i class="material-icons">av_timer</i>
                    <span> 1:30</span>
                </div>
                <div class="recipe__score">
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star_half</i>
                    <i class="material-icons">star_border</i>
                    <i class="material-icons">star_border</i>
                </div>
            </div>
        </div>
    `;
    elements.sliderPage.insertAdjacentHTML('beforeend', markup);
};

const createButton = (page, type) => `
        <div class="nav__arrow nav__arrow--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
            <i class="material-icons">arrow_${type === 'prev' ? 'back' : 'forward'}_ios</i>
            <span>
                Page ${type === 'prev' ? page - 1 : page + 1}
            </span>
        </div>
    `;

const renderButtons = (page, numRecipes, resPage) => {
    const pages = Math.ceil(numRecipes / resPage);

    console.log('all good');

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

    elements.sliderFooter.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPage = 12) => {
    // first and last item in the recepies page
    const start = (page - 1) * resPage; 
    const end = page * resPage; 

    recipes.slice(start, end).forEach(renderRecipe);
    renderButtons(page, recipes.length, resPage);
};