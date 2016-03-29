import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredCalorieState = args[0];
    if(desiredCalorieState === "lowCal") {
      return input.filter((food) => {
        if(food.calories <= 350) {
          return true;
        }
      });
    } else if (desiredCalorieState === "highCal") {
      return input.filter((food) => {
        if(food.calories > 350) {
          return true;
        }
      });
    } else {
      return input;
    }
  }
}
