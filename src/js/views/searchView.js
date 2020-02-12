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

const renderRecipe = recipe => {
    const markup = `
        <a class="recipe btn btn--next" href="${recipe.recipe_id}">
            <div class="recipe__img-wrap">
                <div class="recipe__thumbnail">
                    <img src="${recipe.image_url}" alt="thumb">
                </div>
            </div>
            <div class="recipe__text-wrap">
                <h3 class="recipe__title">
                    ${recipe.title}
                </h3>
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
        </a>
    `;
    elements.sliderPage.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};