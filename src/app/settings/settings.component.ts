import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user/user.service';
import * as moment from 'moment';
import {UserPassword} from '../models/userPassword';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  changed: boolean;
  newPass: string;
  user: User = new User();
  userPass: UserPassword = new UserPassword();
  constructor(private userService: UserService) {
  }




  ngOnInit() {
    this.getUserById();
  }
  getUserById() {
    this.userService.findUserWithToken().subscribe(res => {
      // @ts-ignore
      this.user = res;
      // @ts-ignore
      this.user.roles = res.roles.map(r =>  r.name);
      console.log(this.user);

    });
  }
  modify() {

    this.userService.modify(this.user).subscribe(res => {
      console.log(this.user);
    });
  }

  changePassword() {
    this.userService.changePassword(this.userPass).subscribe(res => {
      // @ts-ignore
      this.changed = res;
      console.log();
    });
  }
}
