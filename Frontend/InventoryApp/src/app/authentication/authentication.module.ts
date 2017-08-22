import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AuthenticationRoutingModule } from './authentication-routing.module';

// Components
import { LoginComponent } from './login/login.component';

// Services
import { AuthService } from './auth.service';

// Angular material
import { MdButtonModule, MdInputModule } from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    CommonModule,

    AuthenticationRoutingModule,

    // Angular materials
    MdButtonModule,
    MdInputModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthenticationModule { }
