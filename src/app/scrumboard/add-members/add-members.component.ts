import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../services/user/user.service';
import {UserProject} from '../../models/UserProject';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {
  users: User[];
  usersf: User[] = [];
  userProject: UserProject;
  search = '';
  private b: boolean;
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
      this.usersf = [];
      this.users.forEach(u => {
        this.b = false;
        if (u.userProjects.length !== 0 ) {
          u.userProjects.forEach(up => {
            if ( up.project.id === this.data.id) {
              this.b = true;
            }
          });
          // @ts-ignore
          if (this.b === false) {
            this.usersf.push(u);
          }
        } else {
          this.usersf = this.users;
        }
        console.log(this.usersf);
      });
    });
  }
  addUserProject(idU) {
    this.userProject.user.id = idU;
    this.userProject.project.id = this.data.id;
    this.userService.addUserProject(this.userProject).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    });
  }
}
