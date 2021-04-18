import { Injectable } from '@angular/core';
import { TYPE_COUNTER } from '../models/types-counter';

@Injectable({
  providedIn: 'root'
})
export class TemtemTypesService {

  constructor() { }

  getTypesWeakness(temtemTypes: string[]) {
    const res = {};
    for (const type of temtemTypes) {
      for (const counter of TYPE_COUNTER[type].resBad) {
        if (res[counter]) {
          res[counter] *= 2;
        } else {
          res[counter] = 2;
        }
      }
    }

    return res;
  }
}
