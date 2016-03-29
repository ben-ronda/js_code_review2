import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './food-new.component';
import { FoodEditComponent } from './food-edit.component';
import { SortPipe } from './sort.pipe';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [SortPipe],
  directives: [FoodComponent, NewFoodComponent, FoodEditComponent],
  template: `
  <div>
    <new-food
    (onSubmitNewFood)="createFood($event)">
    </new-food>

    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">--</option>
      <option value="lowCal">Food/Snacks Under 350 Calories</option>
      <option value="highCal">Food/Snacks Over 350 Calories</option>
    </select>

    <food-display *ngFor="#currentFood of foodList | calorie:filterCalorie"
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
  public filterCalorie: string = "all";
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
  onChange(filterOption) {
    this.filterCalorie = filterOption;
  }
}
