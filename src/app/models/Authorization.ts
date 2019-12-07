import {Time} from '@angular/common';
import {User} from './User';

export  class Authorization {
  id: number;
  date: Date;
  beginhour: Time;
  endhour: Time;
  reason: string;
  user: User;
    status: number;
   rejectionReason: string;
  constructor() {
  }
}
