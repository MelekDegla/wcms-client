import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['username', 'email', 'Actions'];
  dataSource = new MatTableDataSource(this.users);
  constructor( public dialogRef: MatDialogRef<AddMembersComponent>,
               @Inject(MAT_DIALOG_DATA) public data,
               private userService: UserService) { }

  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    this.userService.list().subscribe(list => {
      this.users = list;
      this.dataSource = new MatTableDataSource<User>(this.users);
    });
  }
  addUserProject(idU) {
    this.userService.addUserProject(this.data.id, idU).subscribe(res => {
      console.log(res);
    });
  }
}
