import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {User} from '../models/User';
import {UserService} from '../services/user/user.service';
import {RemoveUserComponent} from './remove-user/remove-user.component';
import {ModifyUserComponent} from './modify-user/modify-user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['username', 'age', 'salary', 'Actions'];
  dataSource = new MatTableDataSource(this.users);
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
    this.loadUser();
  }
  loadUser() {
    this.userService.list().subscribe(list => {
      this.users = list;
      this.dataSource = new MatTableDataSource<User>(this.users);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
