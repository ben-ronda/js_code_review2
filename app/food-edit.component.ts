import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div>
    <h2>Edit Food: </h2>
    <input [(ngModel)]="food.name">
    <h5>Description</h5>
    <input [(ngModel)]="food.details">
    <h5>Calories</h5>
    <input [(ngModel)]="food.calories">
  </div>
  `
})
export class FoodEditComponent {
  public food: Food;
}
