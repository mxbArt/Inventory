import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { StoreListComponent } from './store-list/store-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { StoreEditComponent } from './store-edit/store-edit.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductEditComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'category/:id', component: CategoryEditComponent },
      { path: 'stores', component: StoreListComponent },
      { path: 'store/:id', component: StoreEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
