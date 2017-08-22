import { Injectable } from '@angular/core';

// Interfaces
import { IAuthData } from '../core/models/authentication/IAuthData.model';

// Fake data
import fakeUsers from '../fake-data/fake-auth-data';

// Models
import { ILoginData } from '../core/models/authentication/ILoginData.model';

// TODO: add logic to auth service!

@Injectable()
export class AuthService {
  authData: IAuthData;

  constructor() {}

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

}
