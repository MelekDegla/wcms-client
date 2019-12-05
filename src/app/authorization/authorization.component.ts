import { Component, OnInit } from '@angular/core';
import {Authorization} from '../models/Authorization';
import {AuthorizationService} from '../services/authorization.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ModifyProjectComponent} from '../projects/modify-project/modify-project.component';
import {ModifyAuthorizationComponent} from './modify-authorization/modify-authorization.component';
import {AddAuthorizationComponent} from './add-authorization/add-authorization.component';
import {RemoveAuthorizationComponent} from './remove-authorization/remove-authorization.component';
import {DataSource} from '@angular/cdk/table';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  authorizations: [Authorization] ;
  displayedColumns: string[] = ['username', 'reason', 'date', 'begin hour', 'end hour', 'actions'];
  dataSource ;
  isAdmin = localStorage.isAdmin === 'true';
  constructor(public dialog: MatDialog, private authorizationService: AuthorizationService) { }

  ngOnInit() {

    this.authorizationService.list().subscribe(value => {
      this.authorizations = value ;
      this.dataSource = new MatTableDataSource(this.authorizations);
    });
  }
  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddAuthorizationComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(r => this.ngOnInit());
  }
  openDialogDelete(idd): void {
    const dialogRef = this.dialog.open(RemoveAuthorizationComponent, {
      width: '400px',
      data: {
        id: idd
      }
    });
    dialogRef.afterClosed().subscribe(r => this.ngOnInit());
  }
  openDialogModify(idr): void {
    const dialogRef = this.dialog.open(ModifyAuthorizationComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });
    dialogRef.afterClosed().subscribe(r => this.ngOnInit());
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
