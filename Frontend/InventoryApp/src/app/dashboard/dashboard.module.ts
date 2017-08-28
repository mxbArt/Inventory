import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk';

// Pipes
import { FilterPipe } from '../infrastructure/pipes/filter.pipe';
// Custom modules
import { SharedModule } from '../dashboard/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
// Services
import { ProfileService } from './common/profile/profile.service';
import { StorageService } from './common/storages/storage.service';
// Angular materials
import { MdListModule, MdButtonModule, MdAutocompleteModule, MdInputModule, MdTableModule } from '@angular/material';
// Components
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard.component';
import { StoragesComponent } from './common/storages/storages.component';
import { StorageItemComponent } from './common/storages/storage-item/storage-item.component';
import { ProfileComponent } from './common/profile/profile.component';
import { ProductsComponent } from './common/products/products.component';
import { StorageDetailsComponent } from './common/storages/storage-details/storage-details.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkTableModule,

    // Routing
    DashboardRoutingModule,

    // Custom modules
    SharedModule,

    // Angular materials
    MdListModule,
    MdButtonModule,
    MdAutocompleteModule,
    MdInputModule,
    MdTableModule
  ],
  declarations: [
    DashboardComponent,
    MenuComponent,
    ProfileComponent,
    StoragesComponent,
    StorageItemComponent,

    FilterPipe,

    ProductsComponent,

    StorageDetailsComponent
  ],
  providers: [
    ProfileService,
    StorageService,
  ]
})
export class DashboardModule { }
