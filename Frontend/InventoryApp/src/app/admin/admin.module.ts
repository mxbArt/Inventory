import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreEditComponent } from './store-edit/store-edit.component';

import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductListComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryEditComponent,
    StoreListComponent,
    StoreEditComponent
  ],
  providers: [
    ProductService,
    CategoryService,
    StoreService
  ]
})
export class AdminModule { }
