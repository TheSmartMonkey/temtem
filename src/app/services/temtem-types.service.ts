import { TYPES } from './../models/types';
import { Injectable } from '@angular/core';
import { TYPE_COUNTER } from './../models/types-counter';

@Injectable({
  providedIn: 'root'
})
export class TemtemTypesService {

  constructor() { }

  getTypesWeakness(temtemTypes: string[], stat: string) {
    const res = {};
    for (const type of temtemTypes) {
      for (const counter of TYPE_COUNTER[type][stat]) {
        if (res[counter]) {
          res[counter] *= 2;
        } else {
          res[counter] = 2;
        }
      }
    }

    return res;
  }

  formatTypes(temtemTypes: string[], stat: string): string[] {
    const types = this.getTypesWeakness(temtemTypes, stat);
    const format = [];

    for (const type of TYPES) {
      if (types[type]) {
        format.push(types[type].toString());
      } else {
        format.push('1');
      }
    }

    return format;
  }
}
