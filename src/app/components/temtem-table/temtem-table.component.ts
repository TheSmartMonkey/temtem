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

  selectedTypes: string[];

  constructor(private temtemTypesService: TemtemTypesService) { }

  ngOnInit() {
    this.temtemTypesService.currentTemtemTypeStage.subscribe(type => {
      this.selectedTypes = type
      this.setTable();
    });
  }

  setTable() {
    if (this.title === 'Resistance') {
      this.table = this.temtemTypesService.getResistance(this.selectedTypes);
    } else if (this.title === 'Damages') {
      this.table = this.temtemTypesService.getDamages(this.selectedTypes);
    }
  }

}
