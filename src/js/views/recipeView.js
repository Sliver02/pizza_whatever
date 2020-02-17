import scroll from './scrollView';
import { elements } from "./base";

const createIngredient = ingredient => `
    <li class="recipe__item">
        <i class="recipe__check material-icons">check_circle</i>
        <span class="recipe__count">${ingredient.count}</span>
        <span class="recipe__unit">${ingredient.unit}</span>
        <span class="recipe__ingredient">${ingredient.ingredient}</span>
    </li>
`;

export const clearResults = () => {
    elements.recipe.innerHTML = '';
};

export const renderRecipe = recipe => {
    const markup = `
            

            <div class="recipe__img-wrap">
                <img src="${recipe.img}" alt="${recipe.title}">
            </div>
            
            <div class="recipe__info">
                
                <div class="author">
                    Published by <a href="${recipe.url}"> ${recipe.author}</a>
                </div>

                <div class="time">
                    <i class="material-icons">timer</i>
                    <span>${recipe.time} Minutes</span>
                </div>
                <div class="portions">
                    <i class="material-icons">people</i>
                    <span>${recipe.servings} Portions</span>
                </div>
                
            </div>

            <div class="recipe__text-wrap">
                
                <h2>Ingredients</h2>

                <ul class="recipe__list">

                ${recipe.ingredients.map(el => createIngredient(el)).join('')}
                    
                </ul>

            </div>

            <div class="recipe__title">
                <h1>
                    <span>${recipe.title}</span>
                </h1>
            </div>

            <div class="recipe__close btn btn--prev">
                <i class="material-icons">cancel</i>
            </div>

    `;

    elements.recipe.insertAdjacentHTML('afterbegin', markup);
    scroll.scrollSections();
};