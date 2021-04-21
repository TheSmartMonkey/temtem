import { TYPES } from './../../models/types';
import { Component, Input, OnInit } from '@angular/core';
import { TemtemTypesService } from './../../services/temtem-types.service';


@Component({
  selector: 'app-temtem-table',
  templateUrl: './temtem-table.component.html',
  styleUrls: ['./temtem-table.component.scss']
})
export class TemtemTableComponent implements OnInit {

  types: string[] = TYPES;
  table = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];

  @Input() title: string;
  @Input() stat: string;

  private _selectedTypes = [];
  @Input() set selectedTypes(selectedTypes: string[]) {
    this._selectedTypes = selectedTypes;
    this.setTable();
  }
  get selectedTypes(): string[] { return this._selectedTypes; }

  constructor(private temtemTypesService: TemtemTypesService) { }

  ngOnInit(): void {
    this.setTable();
  }

  setTable() {
    if (this.title === 'Resistance') {
      this.table = this.temtemTypesService.getResistance(this.selectedTypes);
    } else if (this.title === 'Damages') {
      this.table = this.temtemTypesService.getDamages(this.selectedTypes);
    }
  }

}
