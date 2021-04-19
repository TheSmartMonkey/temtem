import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedTypes: string[];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  getType(type: string) {
    this.selectedTypes = JSON.parse(type);
  }

}
