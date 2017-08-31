// Interfaces
import { IUser } from '../core/models/IUser.model';
import { Roles } from '../core/enums/roles.enum';

let fakeUsers: Array<IUser> = [
  {
    id: '2357fe82-b85d-49d1-af83-82d9f17ffb4c',
    email: 'driver@gmail.com',
    password: 'Driver123',
    role: Roles.driver
  },
  {
    id: '96b93c5d-7841-4a59-b09b-2a4e48e4778a',
    email: 'admin@gmail.com',
    password: 'Admin123',
    role: Roles.admin
  }
];

export default fakeUsers;
