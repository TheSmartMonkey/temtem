import { TYPES } from './../models/types';
import { Injectable } from '@angular/core';
import { TYPE_COUNTER } from './../models/types-counter';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemtemTypesService {

  private temtemTypeStage = new BehaviorSubject([]);
  currentTemtemTypeStage = this.temtemTypeStage.asObservable();

  constructor() { }

  updateTemtemType(typeList: string[]) {
    this.temtemTypeStage.next(typeList)
  }

  getCounters(temtemTypes: string[], stat: string) {
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

  setCounters(temtemTypes: string[], stat: string): number[] {
    const types = this.getCounters(temtemTypes, stat);
    const format = [];

    for (const type of TYPES) {
      if (types[type]) {
        format.push(types[type]);
      } else {
        format.push(1);
      }
    }

    return format;
  }

  calculateCounter(goodStat: number[], badStat: number[]) {
    const response = [];
    for (let i = 0; i < goodStat.length; i++) {
      const calculation = badStat[i] * (1 / goodStat[i]);
      response.push(calculation);
    }

    return response
  }

  formatResponse(response: number[]): string[] {
    const format = [];
    for (const element of response) {
      if (element === 0.5) {
        format.push('1/2');
      } else if (element === 0.25) {
        format.push('1/4');
      } else {
        format.push(element.toString());
      }
    }

    return format;
  }

  getResistance(temtemTypes: string[]) {
    const good = this.setCounters(temtemTypes, 'resGood');
    const bad = this.setCounters(temtemTypes, 'resBad');
    const calculation = this.calculateCounter(good, bad);
    const response = this.formatResponse(calculation);

    return (response) ? response : []
  }

  getDamages(temtemTypes: string[]) {
    const good = this.setCounters(temtemTypes, 'damageGood');
    const bad = this.setCounters(temtemTypes, 'damageBad');
    const calculation = this.calculateCounter(bad, good);
    const response = this.formatResponse(calculation);

    return (response) ? response : []
  }

}
