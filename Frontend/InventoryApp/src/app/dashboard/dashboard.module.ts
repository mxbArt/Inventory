import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
// Services
import { ProfileService } from './profile.service';
// Components
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard.component';

// Angular materials
import { MdListModule, MdButtonModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';

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
    MenuComponent,
    ProfileComponent
  ],
  providers: [
    ProfileService
  ]
})
export class DashboardModule { }
