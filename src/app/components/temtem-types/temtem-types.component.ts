import { TemtemTypesService } from './../../services/temtem-types.service';
import { AfterViewInit, Component } from '@angular/core';
import { TYPES } from '../../models/types';

@Component({
  selector: 'app-temtem-types',
  templateUrl: './temtem-types.component.html',
  styleUrls: ['./temtem-types.component.scss'],
})
export class TemtemTypesComponent implements AfterViewInit {
  types: string[] = TYPES;
  selectedTypes: string[];

  constructor(private temtemTypesService: TemtemTypesService) {}

  ngAfterViewInit() {
    this.temtemTypesService.currentTemtemTypeStage.subscribe((type) => {
      this.selectedTypes = type;
      this.setButtonsToGrey(type);
    });
  }

  onClickType(type: string) {
    if (this.limitSelectedTypes(type)) {
      this.setSelectedTypes(type);
      this.temtemTypesService.updateTemtemType(this.selectedTypes);
    }
  }

  setButtonsToGrey(types: string[]) {
    this.removeGreyBorder();
    for (const element of types) {
      const typeButton = document.getElementById(element);
      if (typeButton.style.border) {
        typeButton.style.border = '';
      } else {
        typeButton.style.border = '2px solid grey';
      }
    }
  }

  setSelectedTypes(type: string) {
    if (this.selectedTypes.includes(type)) {
      this.selectedTypes.splice(this.selectedTypes.indexOf(type), 1);
    } else {
      this.selectedTypes.push(type);
    }
  }

  limitSelectedTypes(type: string): boolean {
    if (this.selectedTypes.length < 2) {
      return true;
    } else if (this.selectedTypes.includes(type)) {
      return true;
    }
    return false;
  }

  resetTypes() {
    this.removeGreyBorder();
    this.selectedTypes = [];
    this.temtemTypesService.updateTemtemType(this.selectedTypes);
  }

  removeGreyBorder() {
    for (const type of TYPES) {
      const typeButton = document.getElementById(type);
      typeButton.style.border = '';
    }
  }
}
