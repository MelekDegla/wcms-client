import {Notification} from './Notification';
import {UserProject} from './UserProject';

export class User {
  id: number;
  username: string;
  password: string;
  salary: number;
  birthdate: string;
  address: string;
  leaveBalance: number;
  cin: string;
  email: string;
  roles: string[];
  notifications: Notification[];
  userProjects: UserProject[];

  constructor() {  }
}
