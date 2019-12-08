import {Notification} from './Notification';
import {UserProject} from './UserProject';
import {Authorization} from './Authorization';

export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  salary: number;
  birthdate: string;
  address: string;
  leaveBalance: number;
  cin: string;
  email: string;
  rib: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  roles: string[];
  notifications: Notification[];
  userProjects: UserProject[];
  athorisations: Authorization[];

  constructor() {  }
}
