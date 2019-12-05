import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user/user.service';
import * as moment from 'moment';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User = new User();
  updForm: FormGroup;
  constructor(private userService: UserService,  private updfb: FormBuilder) {
    this.updForm = this.updfb.group({
      cin : new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9]{8}/),
        Validators.maxLength(8),
        Validators.minLength(8),
      ]),
      username : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      birthdate : new FormControl('', [
        Validators.required,
      ]),
      leaveBalance : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      address : new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      salary : new FormControl('', [
        Validators.required,
      ]),
      email : new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/),
      ])
    });
  }



  ngOnInit() {
    this.getUserById();
  }
  getUserById() {
    this.userService.findUserWithToken().subscribe(res => {
      // @ts-ignore
      this.user = res;
      this.user.birthdate = moment(this.user.birthdate).toDate().toLocaleDateString();
      // @ts-ignore
      this.user.roles = res.roles.map(r =>  r.name);
      console.log(this.user);

    });
  }
  modify() {
    if (this.updForm.invalid) { return; }
    this.user.birthdate = moment(this.user.birthdate).toDate().toLocaleDateString();
    this.userService.modify(this.user).subscribe(res => {
      console.log(res);
    });
  }

  get cin() { return this.updForm.get('cin'); }
  get username() { return this.updForm.get('username'); }
  get email() { return this.updForm.get('email'); }
  get birthdate() { return this.updForm.get('birthdate'); }
  get leaveBalance() { return this.updForm.get('leaveBalance'); }
  get address() { return this.updForm.get('address'); }
  get salary() { return this.updForm.get('salary'); }

}
