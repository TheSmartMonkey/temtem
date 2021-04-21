import { TEMTEMS } from './../../models/temtem';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Temtem {
  name: string;
  type: string;
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

  constructor() { }

  ngOnInit(): void {
    this.createTemtemData();
    this.dataSource = new MatTableDataSource(this.TABLE_ELEMENTS);
  }

  createTemtemData() {
    for (const [key, value] of Object.entries(TEMTEMS)) {
      const element: Temtem = {
        name: key,
        type: value.toString()
      }
      this.TABLE_ELEMENTS.push(element)
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
