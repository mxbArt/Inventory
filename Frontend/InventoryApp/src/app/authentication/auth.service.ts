import { Injectable } from '@angular/core';

// Interfaces
import { IAuthData } from '../core/models/authentication/IAuthData';

// TODO: add logic to auth service!

@Injectable()
export class AuthService {
  authData: IAuthData;

  constructor() { }

}
