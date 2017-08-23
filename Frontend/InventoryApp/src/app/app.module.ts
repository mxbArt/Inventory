import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Guards
import { AuthGuard } from './infrastructure/guards/auth-guard.service';

// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Modules
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './authentication/auth.service';

@NgModule({
  imports: [
    BrowserModule,

    // Custom modules
    CoreModule,
    AuthenticationModule,
    DashboardModule,

    // Routing
    AppRoutingModule,

    // Angular materials
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
