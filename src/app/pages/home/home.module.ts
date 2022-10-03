import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages
import { TemtemTableComponent } from './../../components/temtem-table/temtem-table.component';
import { TemtemTypesComponent } from './../../components/temtem-types/temtem-types.component';
import { TemtemSearchComponent } from './../../components/temtem-search/temtem-search.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [HomeComponent, TemtemSearchComponent, TemtemTypesComponent, TemtemTableComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, MatButtonModule, MatTableModule, MatInputModule, BrowserAnimationsModule],
  providers: [TemtemTypesComponent],
})
export class HomeModule {}
