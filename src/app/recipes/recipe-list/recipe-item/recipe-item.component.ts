import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe : Recipe;
  @Input() recipeIndexValue : number;
  @Output() recipeItemSelected = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  //change made in feature x 2
  onRecipeItemSelected(index : number){
    this.recipeItemSelected.emit(index);
  }

}
