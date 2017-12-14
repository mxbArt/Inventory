import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Guards
import { AuthGuard } from './infrastructure/guards/auth-guard.service';
// Components
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { ProductsComponent } from './home/categories/products/products.component';
import { CategoriesHomeComponent } from './home/categories/categories-home/categories-home.component';
import { ProductsDetailsComponent } from './home/categories/products/products-details/products-details.component';
import { ManagementComponent } from './home/management/management.component';
import { ManageCategoriesComponent } from './home/management/manage-categories/manage-categories.component';
import { ManageProductsComponent } from './home/management/manage-products/manage-products.component';

const routes: Routes = [
  {
    path: '', /*canActivate: [AuthGuard],*/  children: [
      { path: '', pathMatch: 'full', redirectTo: 'categories' },
      {
        path: '', component: HomeComponent, children: [
          { path: 'categories', component: CategoriesComponent, children: [
            { path: '', component: CategoriesHomeComponent },
            { path: ':categoryId', component: ProductsComponent },
            { path: ':categoryId/products/:productId', component: ProductsDetailsComponent },
          ] },
          { path: 'statictics', component: StatisticsComponent },
          { path: 'management', component: ManagementComponent, children: [
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            { path: 'categories', component: ManageCategoriesComponent },
            { path: 'products', component: ManageProductsComponent }
          ] }
        ]
      },
      { path: 'about', component: AboutComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
