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
  typeValues: any;

  constructor(private temtemTypesService: TemtemTypesService) { }

  ngOnInit() {
  }

  selectType(type: string) {
    const typeButton = document.getElementById(type);
    if (typeButton.style.border) {
      typeButton.style.border = '';
    } else {
      typeButton.style.border = '2px solid grey';
    }

    console.log(this.temtemTypesService.getTypesWeakness(['water', 'nature']));
  }

}
