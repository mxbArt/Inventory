import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { AuthenticationRoutingModule } from './authentication-routing.module';

// Components
import { LoginComponent } from './login/login.component';

// Services
import { AuthService } from './auth.service';

// Angular material
import { MdButtonModule, MdInputModule, MdSnackBarModule } from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    AuthenticationRoutingModule,

    // Angular materials
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule
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
