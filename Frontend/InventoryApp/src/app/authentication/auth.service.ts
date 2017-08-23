import { Injectable } from '@angular/core';

// Interfaces
import { IAuthData } from '../core/models/authentication/IAuthData.model';

// Fake data
import fakeUsers from '../fake-data/fake-auth-data';

// Models
import { ILoginData } from '../core/models/authentication/ILoginData.model';
import { IRegistrationData } from '../core/models/authentication/IRegistrationData.model';
import { IUser } from '../core/models/IUser.model';

// Enums
import { Roles } from '../core/enums/roles.enum';

// TODO: add logic to auth service!

@Injectable()
export class AuthService {
  authData: IAuthData;

  constructor() {}

  // Works with fake users
  authenticate(loginData: ILoginData): boolean {
    // Fake auth
    const user = fakeUsers.find(u => u.email === loginData.email && u.password === loginData.password);
    if (user) {
      this.authData = {
        isAuthenticated: true,
        email: user.email,
        role: user.role
      };
      return true;
    }
    return false;
  }

  // Works with fake users
  register(registerData: IRegistrationData): boolean {
    const user: IUser = {
      id: Math.random().toString(),
      email: registerData.email,
      password: registerData.password,
      role: Roles.driver,
      name: '(Не указано)'
    };
    fakeUsers.push(user);
    return true;
  }

}
