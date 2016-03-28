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
  <input placeholder="Calories" #newCalories>
  <button class="add-food" (click)="addFood(newName, newDescription, newCalories)">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<any>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    var foodArray = [userName.value, userDetails.value, userCalories.value]
    this.onSubmitNewFood.emit(foodArray);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
