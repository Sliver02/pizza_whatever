import scroll from './scrollView';
import { elements } from "./base";
import { Fraction } from 'fractional';

export const clearResults = () => {
    elements.recipe.innerHTML = '';
};

const formatCount = count => {
    if (count) {
        const [int, dec] =count.toString().split('.').map(el => parseInt(el, 10));

        if (!dec) return count;

        if (int === 0) {
            const fr = new Fraction(count); 
            return `${fr.numerator}/${fr.denominator}`;
        } else {
            const fr = new Fraction(count - int);
            return `${int} ${fr.numerator}/${fr.denominator}`;
        }
    }
    return '?';
};

const createIngredient = ingredient => `
    <li class="recipe__item">
        <i class="recipe__check material-icons">check_circle</i>
        <span class="recipe__count"> ${formatCount(ingredient.count)} </span> 
        <span class="recipe__unit"> ${ingredient.unit} </span> 
        <span class="recipe__ingredient"> ${ingredient.ingredient} </span> 
    </li>
`;

export const renderRecipe = recipe => {
    const markup = `
            
        <div class="recipe__container">

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

                    <div class="modify-protion">
                        <i class="material-icons btn btn--add">add_circle</i>
                        <i class="material-icons btn btn--remove">remove_circle</i>
                    </div>
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

            <a class="btn--add-cart btn">
                <i class="material-icons">shopping_cart</i> Add to Shopping list
            </a>

        </div>
    `;

    elements.recipe.insertAdjacentHTML('afterbegin', markup);
    scroll.scrollSections();
};