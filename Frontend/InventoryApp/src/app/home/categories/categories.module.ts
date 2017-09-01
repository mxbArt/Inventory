import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Pipes
import { FilterPipe } from '../../infrastructure/filter.pipe';
// Angular materials
import { MdInputModule, MdAutocompleteModule } from '@angular/material';
// Components
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Angular materials
    MdInputModule,
    MdAutocompleteModule
  ],
  declarations: [
    CategoryItemComponent,
    CategoriesComponent,
    // Pipes
    FilterPipe
  ]
})
export class CategoriesModule { }
