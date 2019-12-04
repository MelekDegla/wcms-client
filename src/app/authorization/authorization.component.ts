import { Component, OnInit } from '@angular/core';
import {Authorization} from '../models/Authorization';
import {AuthorizationService} from '../services/authorization.service';
import {MatDialog} from '@angular/material';
import {ModifyProjectComponent} from '../projects/modify-project/modify-project.component';
import {ModifyAuthorizationComponent} from './modify-authorization/modify-authorization.component';
import {AddAuthorizationComponent} from './add-authorization/add-authorization.component';
import {RemoveAuthorizationComponent} from './remove-authorization/remove-authorization.component';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  authorizations: [Authorization] ;
  constructor(public dialog: MatDialog, private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.authorizationService.list().subscribe(value => {this.authorizations = value ; });
  }
  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddAuthorizationComponent, {
      width: '400px'
    });
  }
  openDialogDelete(idd): void {
    const dialogRef = this.dialog.open(RemoveAuthorizationComponent, {
      width: '400px',
      data: {
        id: idd
      }
    });
  }
  openDialogModify(idr): void {
    const dialogRef = this.dialog.open(ModifyAuthorizationComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });
  }
}
