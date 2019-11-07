import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/User';
import * as moment from 'moment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, public dialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit() {
    this.user = new User();
  }
  add() {
    this.user.birthdate = moment(this.user.birthdate).toDate().toLocaleDateString();
    this.userService.add(this.user).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
      });
  }
}
