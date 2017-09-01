import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Guards
import { AuthGuard } from './shared/guards/auth-guard.service';

// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';

// Angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';

import { AuthService } from './authentication/auth.service';
import { CategoriesComponent } from './home/categories/categories.component';
import { StatisticsComponent } from './home/statistics/statistics.component';

@NgModule({
  imports: [
    BrowserModule,

    // Custom modules
    CoreModule,
    SharedModule,
    AuthenticationModule,

    // Routing
    AppRoutingModule,

    // Angular materials
    MdButtonModule,
    MdListModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    CategoriesComponent,
    StatisticsComponent,
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
