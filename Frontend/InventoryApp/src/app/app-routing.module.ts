import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Guards
import { AuthGuard } from './infrastructure/auth-guard.service';
// Components
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { ProductsComponent } from './home/categories/products/products.component';
import { ProductDetailsComponent } from './home/categories/product-details/product-details.component';

const routes: Routes = [
  {
    path: '', /*canActivate: [AuthGuard],*/ children: [
      { path: '', pathMatch: 'full', redirectTo: 'categories' },
      {
        path: '', component: HomeComponent, children: [
          { path: 'categories', component: CategoriesComponent },
          { path: 'categories/:id', component: ProductsComponent},
          { path: 'products/:id', component: ProductDetailsComponent },
          { path: 'statictics', component: StatisticsComponent },
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
