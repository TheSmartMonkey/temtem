import { TemtemTypesComponent } from './../../components/temtem-types/temtem-types.component';
import { TemtemSearchComponent } from './../../components/temtem-search/temtem-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    TemtemSearchComponent,
    TemtemTypesComponent
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
