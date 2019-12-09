import {User} from './User';

export class Holiday {
  id: number;
  startDate: string;
  endDate: string;
  reason: string;
  status: number;
  rejectionReason: string;
  user: User;
  constructor() {}
}
