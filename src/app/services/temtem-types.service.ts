import { numberRange, TYPES, typesRange } from './../models/types';
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
    this.temtemTypeStage.next(typeList);
  }

  private getCounters(temtemTypes: string[], stat: string): { [key: string]: number } {
    const response = {};
    for (const type of temtemTypes) {
      for (const counter of TYPE_COUNTER[type][stat]) {
        if (response[counter]) {
          response[counter] *= 2;
        } else {
          response[counter] = 2;
        }
      }
    }

    return response;
  }

  private setCounters(temtemTypes: string[], stat: string): numberRange[] {
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

  private calculateCounter(goodStat: numberRange[], badStat: numberRange[]): typesRange[] {
    const response = [];
    for (let i = 0; i < goodStat.length; i++) {
      const calculation = badStat[i] * (1 / goodStat[i]);
      response.push(calculation);
    }

    return response;
  }

  private calculateDamages(goodStat: numberRange[], badStat: numberRange[], typesLength: number): typesRange[] {
    const response = [];
    for (let i = 0; i < goodStat.length; i++) {
      if (goodStat[i] === 2 || goodStat[i] === 4) {
        response.push(2);
      } else if (badStat[i] === 4) {
        response.push(0.5);
      } else if (badStat[i] === 2 && typesLength < 2) {
        response.push(0.5);
      } else {
        response.push(1);
      }
    }

    return response;
  }

  private formatResponse(response: typesRange[]): string[] {
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

    return (response) ? response : [];
  }

  getDamages(temtemTypes: string[]) {
    const good = this.setCounters(temtemTypes, 'damageGood');
    const bad = this.setCounters(temtemTypes, 'damageBad');
    const calculation = this.calculateDamages(good, bad, temtemTypes.length);
    const response = this.formatResponse(calculation);

    return (response) ? response : [];
  }

}
