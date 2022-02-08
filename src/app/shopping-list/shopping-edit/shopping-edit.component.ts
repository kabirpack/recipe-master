import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName', {static:true}) newIngredientName : ElementRef;
  @ViewChild('ingredientAmount', {static:true}) newIngredientAmount : ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    this.ingredientAdded.emit(
      new Ingredient(this.newIngredientName.nativeElement.value, this.newIngredientAmount.nativeElement.value)
    );
  }

  onClear(){
    this.newIngredientName.nativeElement.value = '';
    this.newIngredientAmount.nativeElement.value = '';
  }


}
