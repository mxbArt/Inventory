import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
// Services
import { ProfileService } from './common/profile/profile.service';
// Components
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard.component';

// Angular materials
import { MdListModule, MdButtonModule } from '@angular/material';
import { ProfileComponent } from './common/profile/profile.component';
import { StoragesComponent } from './common/storages/storages.component';
import { StorageItemComponent } from './common/storages/storage-item/storage-item.component';

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
    ProfileComponent,
    StoragesComponent,
    StorageItemComponent
  ],
  providers: [
    ProfileService
  ]
})
export class DashboardModule { }
