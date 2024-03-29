import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TEMTEMS } from './../../models/temtem';
import { TemtemTypesService } from './../../services/temtem-types.service';

export interface Temtem {
  name: string;
  type: string[];
  tv: TemtemTv;
  tvFilter: string;
}

interface TemtemTv {
  hp?: number;
  sta?: number;
  spd?: number;
  atk?: number;
  def?: number;
  spatk?: number;
  spdef?: number;
}

@Component({
  selector: 'app-temtem-search',
  templateUrl: './temtem-search.component.html',
  styleUrls: ['./temtem-search.component.scss'],
})
export class TemtemSearchComponent implements OnInit {
  TABLE_ELEMENTS: Temtem[] = [];
  displayedColumns: string[] = ['image', 'name', 'type', 'tv', 'info'];
  dataSource: any;

  constructor(private temtemTypesService: TemtemTypesService) {}

  ngOnInit(): void {
    this.createTemtemData();
    this.dataSource = new MatTableDataSource(this.TABLE_ELEMENTS);
    this.temtemTypesService.currentSelectedTypesSubject.subscribe();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickTableRow(type: string[]): void {
    this.temtemTypesService.updateSelectedTypes(type);
  }

  goToWiki(temtem: string): void {
    const url = `https://temtem.fandom.com/wiki/${temtem}`;
    window.open(url, '_blank');
  }

  private createTemtemData(): void {
    for (const [key, value] of Object.entries(TEMTEMS)) {
      const temtemTv = this.formatTemtemTv(value.tv);
      const element: Temtem = {
        name: key,
        type: value.types,
        tv: temtemTv,
        tvFilter: JSON.stringify(temtemTv),
      };
      this.TABLE_ELEMENTS.push(element);
    }
  }

  private formatTemtemTv(tv: TemtemTv): TemtemTv {
    const remaningTv = {};
    for (const [key, value] of Object.entries(tv)) {
      if (value !== 0) remaningTv[key] = value;
    }
    return remaningTv;
  }
}
