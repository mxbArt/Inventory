import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
// Modules
import { CategoriesModule } from './categories/categories.module';
import { SharedModule } from '../shared/shared.module';
// Angular materials
import { MdInputModule, MdAutocompleteModule, MdButtonModule, MdDialogModule, MdTableModule, MdPaginatorModule } from '@angular/material';
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

    SharedModule,
    // Angular materials
    MdInputModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdDialogModule,
    MdTableModule,
    MdPaginatorModule,
  ],
  declarations: [
    HomeComponent,
    StatisticsComponent,
  ]
})
export class HomeModule { }
