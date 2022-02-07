import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList : Recipe[] = [

    new Recipe('Test Recipe1', 'Test Description1', 'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg'),
    new Recipe('Test Recipe2', 'Test Description2', 'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg'),
    new Recipe('Test Recipe3', 'Test Description3', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505')

  ];

  @Output() sendRecipeDetails = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  emitRecipeDetails(index : number){
    this.sendRecipeDetails.emit(this.recipeList[index]);
  }
}
