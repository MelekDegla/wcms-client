import {User} from './User';
import {Project} from './Project';

export class UserProject {
  user: User;
  project: Project;
  isManager: boolean;

  constructor() {
    this.user = new User();
    this.project = new Project();
  }
}
