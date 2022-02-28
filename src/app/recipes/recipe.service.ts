import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeList : Recipe[] = [

        new Recipe('Test Recipe1', 'Test Description1', 'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg'),
        new Recipe('Test Recipe2', 'Test Description2', 'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg'),
        new Recipe('Test Recipe3', 'Test Description3', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505')
    
      ];

    getRecipe(){
        return this.recipeList.slice();  // returns copy of array
    }
}