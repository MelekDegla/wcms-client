import {Time} from '@angular/common';

export  class Authorization {
  id: number;
  date: Date;
  hourbegin: Time;
  hourend: Time;
  reason: string;
  constructor() {
  }
}
