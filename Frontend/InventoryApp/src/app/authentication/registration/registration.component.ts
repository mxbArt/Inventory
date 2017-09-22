import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Angular Material
import { MdSnackBar } from '@angular/material';

// Helpers
import RegexPasswordPattern from '../authentication.helper';

// Services
import { AuthService } from '../auth.service';

// Models
import { IRegistrationData } from '../../core/models/authentication/IRegistrationData.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../authentication.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,
              public errorSnackBar: MdSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    if (this.registerForm.valid) {
      const registerData: IRegistrationData = {
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value
      };

      if (this.authService.register(registerData)) {
        this.router.navigate(['/login']);
      } else {
        this.openSnackBar('Введенный вами адрес электронной почты уже занят!', 'Закрыть');
      }
    }
  }

  initForm() {
    let email = '';
    let password = '';
    let confirmPassword = '';

    this.registerForm = new FormGroup({
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'password': new FormControl(password, [
        Validators.required, Validators.pattern(RegexPasswordPattern)]),
      'confirmPassword': new FormControl(confirmPassword, [
        Validators.required, this.passwordEquality.bind(this)])
    });
  }

  // validator
  passwordEquality(control: FormControl): {[s: string]: boolean} {
    if (!this.registerForm) {
      return null;
    }
    if (this.registerForm.controls['password'].value !== control.value) {
      return {'passwordsNotEquals': true};
    }
    return null;
  }

  openSnackBar(message: string, action: string) {
    this.errorSnackBar.open(message, action, {
      duration: 5000,
    });
  }
}
