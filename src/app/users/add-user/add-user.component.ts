import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/User';
import * as moment from 'moment';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  addForm: FormGroup;
  constructor(private userService: UserService, private addfb: FormBuilder,  public dialogRef: MatDialogRef<AddUserComponent>) {
    this.addForm = this.addfb.group({
      cin : new FormControl('', [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
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
  }
  add() {
    if (this.addForm.invalid) { return; }
    this.user.birthdate = moment(this.user.birthdate).toDate().toLocaleDateString();
    this.userService.add(this.user).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
      });
  }
  get cin() { return this.addForm.get('cin'); }
  get username() { return this.addForm.get('username'); }
  get email() { return this.addForm.get('email'); }
  get birthdate() { return this.addForm.get('birthdate'); }
  get leaveBalance() { return this.addForm.get('leaveBalance'); }
  get address() { return this.addForm.get('address'); }
  get salary() { return this.addForm.get('salary'); }
  get password() { return this.addForm.get('password'); }
}
