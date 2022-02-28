import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList : Recipe[];

  @Output() sendRecipeDetails = new EventEmitter<Recipe>();
  constructor(public recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipeList = this.recipeService.getRecipe();
  }

  emitRecipeDetails(index : number){
    this.sendRecipeDetails.emit(this.recipeList[index]);
  }
}
