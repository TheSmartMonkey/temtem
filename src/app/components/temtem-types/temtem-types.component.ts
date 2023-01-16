import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { TYPES } from '../../models/types';
import { TemtemTypesService } from './../../services/temtem-types.service';

@Component({
  selector: 'app-temtem-types',
  templateUrl: './temtem-types.component.html',
  styleUrls: ['./temtem-types.component.scss'],
})
export class TemtemTypesComponent implements AfterViewInit {
  types: string[] = TYPES;
  selectedTypes: string[] = [];

  @Output() selectedTypesEvent = new EventEmitter<string[]>();

  constructor(private temtemTypesService: TemtemTypesService) {}

  ngAfterViewInit(): void {
    this.temtemTypesService.currentSelectedTypesSubject.subscribe((type) => {
      this.selectedTypes = type;
    });
  }

  onClickType(type: string): void {
    if (this.isSelectedTypesLimited(type)) {
      this.setSelectedTypes(type);
      this.temtemTypesService.updateSelectedTypes(this.selectedTypes);
    }
  }

  resetTypes(): void {
    this.selectedTypes = [];
    this.temtemTypesService.updateSelectedTypes(this.selectedTypes);
  }

  private setSelectedTypes(type: string): void {
    if (this.selectedTypes.includes(type)) {
      this.removeTypeFromSelectedTypes(type);
    } else {
      this.selectedTypes.push(type);
    }
  }

  private removeTypeFromSelectedTypes(type: string) {
    this.selectedTypes.splice(this.selectedTypes.indexOf(type), 1);
  }

  private isSelectedTypesLimited(type: string): boolean {
    if (this.selectedTypes.length < 2) {
      return true;
    } else if (this.selectedTypes.includes(type)) {
      return true;
    }
    return false;
  }
}
