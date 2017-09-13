import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { ItemAddDialogComponent } from './item-add-dialog/item-add-dialog.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ChangeAmountDialogComponent } from './products/product-item/change-amount-dialog/change-amount-dialog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

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
    ItemAddDialogComponent,
    CategoryListComponent,
    ProductsComponent,
    ProductItemComponent,
    ChangeAmountDialogComponent,
    ProductDetailsComponent,
  ],
  entryComponents: [
    ItemAddDialogComponent,
    ChangeAmountDialogComponent
  ],
  providers: [
    WaybillService
  ]
})
export class CategoriesModule { }
