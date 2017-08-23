import { Roles } from '../../enums/roles.enum';

export interface IAuthData {
  isAuthenticated: boolean;
  email: string;
  role: Roles;
}
