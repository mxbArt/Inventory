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
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ChangeAmountDialogComponent } from './products/product-item/change-amount-dialog/change-amount-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
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
    CategoryAddDialogComponent,
    CategoryListComponent,
    ProductsComponent,
    ProductItemComponent,
    ChangeAmountDialogComponent
  ],
  entryComponents: [
    CategoryAddDialogComponent,
    ChangeAmountDialogComponent
  ],
  providers: [
    WaybillService
  ]
})
export class CategoriesModule { }
