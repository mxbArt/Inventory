import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Pipes
import { FilterPipe } from '../../infrastructure/filter.pipe';
// Angular materials
import { MdInputModule, MdAutocompleteModule, MdButtonModule, MdDialogModule } from '@angular/material';
// Components
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoriesComponent } from './categories.component';
import { TransportationComponent } from './transportation/transportation.component';
import { CategoryAddDialogComponent } from './category-add-dialog/category-add-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular materials
    MdInputModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdDialogModule
  ],
  declarations: [
    CategoryItemComponent,
    CategoriesComponent,
    TransportationComponent,
    // Pipes
    FilterPipe,
    CategoryAddDialogComponent
  ],
  entryComponents: [
    CategoryAddDialogComponent
  ]
})
export class CategoriesModule { }
