import { TemtemTypesService } from './../../services/temtem-types.service';
import { TEMTEMS } from './../../models/temtem';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Temtem {
  name: string;
  type: string[];
}

@Component({
  selector: 'app-temtem-search',
  templateUrl: './temtem-search.component.html',
  styleUrls: ['./temtem-search.component.scss']
})
export class TemtemSearchComponent implements OnInit {

  TABLE_ELEMENTS: Temtem[] = [];
  displayedColumns: string[] = ['image', 'name', 'type'];
  dataSource: any

  constructor(private temtemTypesService: TemtemTypesService) { }

  ngOnInit() {
    this.createTemtemData();
    this.dataSource = new MatTableDataSource(this.TABLE_ELEMENTS);
    this.temtemTypesService.currentTemtemTypeStage.subscribe();
  }

  createTemtemData() {
    for (const [key, value] of Object.entries(TEMTEMS)) {
      const element: Temtem = {
        name: key,
        type: value
      }
      this.TABLE_ELEMENTS.push(element)
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickTableRow(type: string[]) {
    this.temtemTypesService.updateTemtemType(type);
  }

}
