import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Pipes
import { FilterPipe } from '../../infrastructure/filter.pipe';
// Angular materials
import { MdInputModule, MdAutocompleteModule, MdButtonModule, MdDialogModule, MdTableModule, MdPaginatorModule } from '@angular/material';
// Components
import { CategoryItemComponent } from './categories-home/category-item/category-item.component';
import { CategoriesComponent } from './categories.component';
import { WaybillComponent } from './waybill/waybill.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Angular materials
    MdInputModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdDialogModule,
    MdTableModule,
    MdPaginatorModule,
  ],
  declarations: [
    // Pipes
    FilterPipe,
    // Components
    CategoryItemComponent,
    CategoriesComponent,
    WaybillComponent,
    ProductsComponent,
    ProductItemComponent,
    CategoriesHomeComponent,
    ProductsDetailsComponent
  ],
  entryComponents: [  ],
  providers: [
  ]
})
export class CategoriesModule { }
