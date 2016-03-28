import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';



@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food/Calories Consumtion Tracker</h1>
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
  })

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Pringles", "Ate the whole dang can.", 900),
      new Food("Jelly Beans", "A couple wont hurt right?", 50),
      new Food("CheezIts", "I love them soooooo much.", 5000)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log("parent", clickedFood.details, clickedFood.calories);
  }
}
