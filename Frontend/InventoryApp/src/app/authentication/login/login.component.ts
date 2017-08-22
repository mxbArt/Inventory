import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Interfaces
import { ILoginData } from '../../core/models/authentication/ILoginData.model';

// Angular material
import { MdSnackBar } from '@angular/material';

// Services
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authentication.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, public errorSnackBar: MdSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    if (this.loginForm.valid) {
      const loginData: ILoginData = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value
      };

      if (this.authService.authenticate(loginData)) {
        this.router.navigate(['/home']);
      }
      else {
        this.openSnackBar('Имя пользователя или пароль указан не правильно!', 'Закрыть');
      }
    }

  }

  private initForm() {
    const email = '';
    const password = '';

    this.loginForm = new FormGroup({
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'password': new FormControl(password, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ])
    });
  }

  openSnackBar(message: string, action: string) {
    this.errorSnackBar.open(message, action, {
      duration: 5000,
    });
  }
}
