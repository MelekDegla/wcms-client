import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../models/User';
import * as  moment from 'moment';
@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, public dialogRef: MatDialogRef<ModifyUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.user = new User();
    this.userService.findById(this.data.id).subscribe(res => {
      this.user = res;
      this.user.birthdate = moment(this.user.birthdate).toDate().toString();
    });
  }
  modify() {
    this.user.birthdate = moment(this.user.birthdate).toDate().toLocaleDateString();
    this.user.roles = ['ADMIN'];
    this.userService.modify(this.user).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }
}
