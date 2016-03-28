import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './food-new.component';
import { FoodEditComponent } from './food-edit.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, NewFoodComponent, FoodEditComponent],
  template: `
  <div>
    <new-food
    (onSubmitNewFood)="createFood($event)">
    </new-food>

    <food-display *ngFor="#currentFood of foodList"
      (click)="foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>

    <edit-food
      *ngIf="selectedFood"
      [food]="selectedFood">
    </edit-food>
  </div>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log("child", clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood): void {
    this.foodList.push(newFood);
  }
}
