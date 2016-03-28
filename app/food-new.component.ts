import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div>
  <h3>Add a Meal or Snack:</h3>

  <input placeholder="Name" #newName>
  <input placeholder="Details" #newDetails>
  <input placeholder="Calories" type="number" #newCalories>
  <button (click)="addFood(newName, newDescription, newCalories)">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var name = userName.value;
    var details = userDetails.value;
    var calories = parseInt(userCalories.value);
    var newFood = new Food(name, details, calories);
    this.onSubmitNewFood.emit(newFood);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
