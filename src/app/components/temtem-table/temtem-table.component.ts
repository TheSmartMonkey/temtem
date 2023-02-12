import { Component, Input, OnInit } from '@angular/core';
import { TYPES } from './../../models/types';
import { TemtemTypesService } from './../../services/temtem-types.service';

@Component({
  selector: 'app-temtem-table',
  templateUrl: './temtem-table.component.html',
  styleUrls: ['./temtem-table.component.scss'],
})
export class TemtemTableComponent implements OnInit {
  types: string[] = TYPES;
  table = new Array(TYPES.length).fill('1');

  @Input() title: string;
  @Input() stat: string;

  selectedTypes: string[];

  constructor(private temtemTypesService: TemtemTypesService) {}

  ngOnInit(): void {
    this.temtemTypesService.currentSelectedTypesSubject.subscribe((type) => {
      this.selectedTypes = type;
      this.setTable();
    });
  }

  setTable(): void {
    switch (this.title) {
      case 'Resistance':
        this.table = this.temtemTypesService.getResistance(this.selectedTypes);
        break;
      case 'Damages':
        this.table = this.temtemTypesService.getDamages(this.selectedTypes);
        break;
      default:
        this.table = this.temtemTypesService.getDamages(this.selectedTypes);
        break;
    }
  }
}
