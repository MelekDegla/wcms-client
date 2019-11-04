import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {User} from '../models/User';
import {UserService} from '../services/user/user.service';
import {RemoveUserComponent} from '../users/remove-user/remove-user.component';
import {ModifyUserComponent} from '../users/modify-user/modify-user.component';
import {AddUserComponent} from './add-user/add-user.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: [User];
  constructor(public dialog: MatDialog, private userService: UserService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openDialogRemove(idr): void {
    const dialogRef = this.dialog.open(RemoveUserComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openDialogModify(idr): void {
    const dialogRef = this.dialog.open(ModifyUserComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }


  ngOnInit() {
  this.userService.list().subscribe(res=>{
    this.users = res ;
    console.log(this.users);
    });
  }

}
