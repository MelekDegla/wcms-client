import {User} from './User';

export class Notification {
  id: number;
  title: string;
  body: string;
  link: string;
  viewed: boolean;
  user: User;
  constructor() {}
}
