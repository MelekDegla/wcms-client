import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../services/user/user.service';
import {UserProject} from '../../models/UserProject';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {
  users: User[];
  userProject: UserProject;

  search = '';
  constructor( public dialogRef: MatDialogRef<AddMembersComponent>,
               @Inject(MAT_DIALOG_DATA) public data,
               private userService: UserService) { }

  ngOnInit() {
    this.loadUser();
    this.userProject = new UserProject();
  }
  loadUser() {
    this.userService.list().subscribe(list => {
      this.users = list;
    });
  }
  addUserProject(idU) {
    this.userProject.user.id = idU;
    this.userProject.project.id = this.data.id;
    this.userService.addUserProject(this.userProject).subscribe(res => {
      console.log(res);
    });
  }

}
