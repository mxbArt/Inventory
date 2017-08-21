import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { InventoryModule } from './inventory/inventory.module';
import { AuthenticationModule } from './authentication/authentication.module';

// Angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,

    // Custom modules
    CoreModule,
    SharedModule,
    AuthenticationModule,
    InventoryModule,
    AdminModule,

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
    MenuComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
