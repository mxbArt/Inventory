import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Pipes
import { FilterPipe } from '../infrastructure/pipes/filter.pipe';
// Custom modules
import { SharedModule } from '../dashboard/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
// Services
import { ProfileService } from './common/profile/profile.service';
import { StorageService } from './common/storages/storage.service';
// Components
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard.component';
import { StoragesComponent } from './common/storages/storages.component';
import { StorageItemComponent } from './common/storages/storage-item/storage-item.component';
import { ProfileComponent } from './common/profile/profile.component';
import { ProductsComponent } from './common/products/products.component';

// Angular materials
import { MdListModule, MdButtonModule, MdAutocompleteModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Routing
    DashboardRoutingModule,

    // Custom modules
    SharedModule,

    // Angular materials
    MdListModule,
    MdButtonModule,
    MdAutocompleteModule,
    MdInputModule
  ],
  declarations: [
    DashboardComponent,
    MenuComponent,
    ProfileComponent,
    StoragesComponent,
    StorageItemComponent,

    FilterPipe,

    ProductsComponent
  ],
  providers: [
    ProfileService,
    StorageService,
  ]
})
export class DashboardModule { }
