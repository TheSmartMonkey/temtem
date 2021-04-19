import { TemtemTypesService } from './../../services/temtem-types.service';
import { Component, OnInit } from '@angular/core';
import { TYPES } from '../../models/types';

@Component({
  selector: 'app-temtem-types',
  templateUrl: './temtem-types.component.html',
  styleUrls: ['./temtem-types.component.scss']
})
export class TemtemTypesComponent implements OnInit {

  types: string[] = TYPES;
  selectedTypes = [];
  weaknessTable = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];

  constructor(private temtemTypesService: TemtemTypesService) { }

  ngOnInit() {
  }

  onClickType(type: string) {
    this.setButtonToGrey(type);
    this.setSelectedTypes(type);
    this.setWeaknessTable();
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

  setWeaknessTable() {
    this.weaknessTable = this.temtemTypesService.formatTypes(this.selectedTypes);
  }

}
