import {User} from './User';

export class Holiday {
  id: number;
  startDate: string;
  endDate: string;
  isValidated: number;
  user: User;
  constructor() {}
}
