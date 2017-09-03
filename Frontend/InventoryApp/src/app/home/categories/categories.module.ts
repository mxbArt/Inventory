import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
// Pipes
import { FilterPipe } from '../../infrastructure/filter.pipe';
// Angular materials
import { MdInputModule, MdAutocompleteModule, MdButtonModule, MdDialogModule, MdTableModule, MdPaginatorModule } from '@angular/material';
// Services
import { WaybillService } from './waybill/waybill.service';
// Components
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoriesComponent } from './categories.component';
import { WaybillComponent } from './waybill/waybill.component';
import { CategoryAddDialogComponent } from './category-add-dialog/category-add-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    // Angular materials
    MdInputModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdDialogModule,
    MdTableModule,
    MdPaginatorModule,
  ],
  declarations: [
    CategoryItemComponent,
    CategoriesComponent,
    WaybillComponent,
    // Pipes
    FilterPipe,
    CategoryAddDialogComponent
  ],
  entryComponents: [
    CategoryAddDialogComponent
  ],
  providers: [
    WaybillService
  ]
})
export class CategoriesModule { }
