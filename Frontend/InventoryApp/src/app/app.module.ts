import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Guards
import { AuthGuard } from './infrastructure/guards/auth-guard.service';
// Modules
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
// Angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdAutocompleteModule } from '@angular/material';
// Services
import { AuthService } from './authentication/auth.service';
import { RequestService } from './core/request.service';
// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Redux
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { rootReducer, IAppState, INITIAL_STATE } from './core/redux/store';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    // Custom modules
    SharedModule,
    AuthenticationModule,
    HomeModule,
    // Routing
    AppRoutingModule,
    // Redux
    NgReduxModule,
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
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE/*, [], enhancers*/);
  }
}
