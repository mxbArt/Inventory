import { Injectable } from '@angular/core';
// Fake data
import fakeUsers from '../fake-data/fake-auth-data';
// Services
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class ProfileService {

  constructor(private authService: AuthService) {}

  getUserName(): string {
    return fakeUsers.find(u => u.email === this.authService.authData.email).name;
  }
}
