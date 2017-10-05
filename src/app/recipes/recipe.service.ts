import { Recipe } from './recipe.model';
import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Cheeseburger',
      'Ein Hamburger mit Käse',
      'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04043431/product-cheeseburger.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1)
      ]),
    new Recipe(
      'Royal TS',
      'Bester Burger',
      'https://www.tz.de/bilder/2017/02/06/7369512/1681268927-hamburger-royal-ts-iIHQ8sBd2a7.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Royal Sauce', 1)
      ]),
    new Recipe(
      'Big Mac',
      'Der Klassiker',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Big_Mac_hamburger.jpg/220px-Big_Mac_hamburger.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('BigMac Sauce', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // get a copy of the array
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
