import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Guards
import { AuthGuard } from './infrastructure/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      // { path: '', pathMatch: 'full', redirectTo: 'home' },
      // { path: 'home', component: DashboardComponent },
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
