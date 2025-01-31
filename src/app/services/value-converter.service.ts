import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueConverterService {

  convertKgToLb(kg: number): number {
    return kg * 2.20462
  }
  
  convertCmToIn(cm: number): number {
    return cm * 0.393701
  }
  

  getWeightFactor(weightLb: number): number {
    if (weightLb < 165) {
      return 1.6
    } else if (weightLb >= 165 && weightLb <= 200) {
      return 1.4
    } else if (weightLb >= 201 && weightLb <= 220) {
      return 1.2
    } else {
      return 1.0
    }
  }
  
}
