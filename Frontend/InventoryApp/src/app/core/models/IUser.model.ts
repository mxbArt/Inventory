import { Roles } from '../enums/roles.enum';

export interface IUser {
  id: string;
  email: string;
  password: string;
  role: Roles;
}
