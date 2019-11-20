import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../models/User';
import * as  moment from 'moment';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  user: User;
  updForm: FormGroup;
  constructor(private userService: UserService,
              private updfb: FormBuilder, public dialogRef: MatDialogRef<ModifyUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
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
      ]),
      password : new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    });
  }
  ngOnInit() {
    this.user = new User();
    this.userService.findById(this.data.id).subscribe(res => {
      this.user = res;
      this.user.birthdate = moment(this.user.birthdate).toDate().toString();
    });
  }
  modify() {
    if (this.updForm.invalid) { return; }
    this.user.birthdate = moment(this.user.birthdate).toDate().toLocaleDateString();
    this.user.roles = ['ADMIN'];
    this.userService.modify(this.user).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }
  get cin() { return this.updForm.get('cin'); }
  get username() { return this.updForm.get('username'); }
  get email() { return this.updForm.get('email'); }
  get birthdate() { return this.updForm.get('birthdate'); }
  get leaveBalance() { return this.updForm.get('leaveBalance'); }
  get address() { return this.updForm.get('address'); }
  get salary() { return this.updForm.get('salary'); }
  get password() { return this.updForm.get('password'); }
}
