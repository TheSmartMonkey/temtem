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
  weaknessTable = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];

  private _selectedTypes = [];
  @Input() set selectedTypes(selectedTypes: string[]) {
    this._selectedTypes = selectedTypes;
    this.setWeaknessTable();
  }
  get selectedTypes(): string[] { return this._selectedTypes; }

  constructor(private temtemTypesService: TemtemTypesService) { }

  ngOnInit(): void {
    this.setWeaknessTable();
  }

  setWeaknessTable() {
    this.weaknessTable = this.temtemTypesService.formatTypes(this.selectedTypes);
  }

}
