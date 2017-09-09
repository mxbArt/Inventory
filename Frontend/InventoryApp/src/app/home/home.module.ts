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
  MdNativeDateModule
} from '@angular/material';
// Custom datepicker
import { MyDateRangePickerModule } from 'mydaterangepicker';
// Components
import { HomeComponent } from './home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HeaderComponent } from '../shared/header/header.component';

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
    MdDatepickerModule
  ],
  declarations: [
    HomeComponent,
    StatisticsComponent,
  ]
})
export class HomeModule { }
