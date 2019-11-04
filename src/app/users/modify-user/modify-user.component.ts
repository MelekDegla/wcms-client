import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from "../../models/User";
@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  user : User;
  constructor(private userService: UserService, public dialogRef: MatDialogRef<ModifyUserComponent>) { }

  ngOnInit() {
    this.user = new User();
  }
  modify() {
    this.userService.modify(this.user).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }
}
