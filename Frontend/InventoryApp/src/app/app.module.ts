import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Guards
import { AuthGuard } from './shared/guards/auth-guard.service';
// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
// Angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdAutocompleteModule } from '@angular/material';
// Services
import { AuthService } from './authentication/auth.service';
import { StorageService } from './core/storage.service';
import { DataRequestService } from './core/data-request.service';
// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,

    // Custom modules
    CoreModule,
    SharedModule,
    AuthenticationModule,
    HomeModule,

    // Routing
    AppRoutingModule,

    // Angular materials
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    StorageService,
    DataRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
