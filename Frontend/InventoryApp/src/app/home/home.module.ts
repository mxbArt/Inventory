import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { ReactiveFormsModule } from '@angular/forms';
// Modules
import { CategoriesModule } from './categories/categories.module';
import { SharedModule } from '../shared/shared.module';
// Angular materials
import {
  MdInputModule,
  MdAutocompleteModule,
  MdButtonModule,
  MdDialogModule,
  MdTableModule,
  MdPaginatorModule,
  MdSortModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdExpansionModule,
  MdListModule
} from '@angular/material';
// Custom datepicker
import { MyDateRangePickerModule } from 'mydaterangepicker';
// Services
import { StatisticsService } from './statistics/statistics.service';
// Components
import { HomeComponent } from './home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ManagementComponent } from './management/management.component';
import { ManageCategoriesComponent } from './management/manage-categories/manage-categories.component';
import { ManageProductsComponent } from './management/manage-products/manage-products.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesModule,
    CdkTableModule,
    RouterModule,
    MdNativeDateModule,
    ReactiveFormsModule,

    SharedModule,
    // Custom datepicker
    MyDateRangePickerModule,
    // Angular materials
    MdInputModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdDialogModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule,
    MdDatepickerModule,
    MdExpansionModule,
    MdListModule
  ],
  declarations: [
    HomeComponent,
    StatisticsComponent,
    ManagementComponent,
    ManageCategoriesComponent,
    ManageProductsComponent,
  ],
  providers: [
    StatisticsService
  ]
})
export class HomeModule { }
