import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { InventoryModule } from './inventory/inventory.module';
import { MenuComponent } from './home/menu/menu.component';

// Angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,

    CoreModule,
    SharedModule,
    UserModule,
    InventoryModule,
    AdminModule,

    AppRoutingModule,

    // Angular materials
    MdButtonModule,
    MdListModule,
    MdMenuModule,
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
