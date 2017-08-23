import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard.component';

// Angular materials
import { MdListModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    // Routing
    DashboardRoutingModule,

    // Custom modules
    SharedModule,

    // Angular materials
    MdListModule,
    MdButtonModule,
  ],
  declarations: [
    DashboardComponent,
    MenuComponent
  ],
  providers: []
})
export class DashboardModule { }
