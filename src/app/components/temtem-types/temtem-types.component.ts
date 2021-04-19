import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TYPES } from '../../models/types';

@Component({
  selector: 'app-temtem-types',
  templateUrl: './temtem-types.component.html',
  styleUrls: ['./temtem-types.component.scss']
})
export class TemtemTypesComponent implements OnInit {

  types: string[] = TYPES;
  selectedTypes = [];

  @Output() typeList = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
    this.typeList.emit(JSON.stringify(this.selectedTypes));
  }

  onClickType(type: string) {
    this.setButtonToGrey(type);
    this.setSelectedTypes(type);
    this.typeList.emit(JSON.stringify(this.selectedTypes));
  }

  setButtonToGrey(type: string) {
    const typeButton = document.getElementById(type);
    if (typeButton.style.border) {
      typeButton.style.border = '';
    } else {
      typeButton.style.border = '2px solid grey';
    }
  }

  setSelectedTypes(type: string) {
    if (this.selectedTypes.includes(type)) {
      this.selectedTypes.splice(this.selectedTypes.indexOf(type), 1);
    } else {
      this.selectedTypes.push(type);
    }
  }

  resetTypes() {
    this.removeGreyBorder();
    this.selectedTypes = [];
    this.typeList.emit(JSON.stringify(this.selectedTypes));
  }

  removeGreyBorder() {
    for (const type of TYPES) {
      const typeButton = document.getElementById(type);
      typeButton.style.border = '';
    }
  }

}
