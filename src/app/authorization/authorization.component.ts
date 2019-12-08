import { Component, OnInit } from '@angular/core';
import {Authorization} from '../models/Authorization';
import {AuthorizationService} from '../services/authorization.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ModifyAuthorizationComponent} from './modify-authorization/modify-authorization.component';
import {AddAuthorizationComponent} from './add-authorization/add-authorization.component';
import {RemoveAuthorizationComponent} from './remove-authorization/remove-authorization.component';
import {DataSource} from '@angular/cdk/table';
import {AcceptAuthorizationComponent} from './accept-authorization/accept-authorization.component';
import {RefuseAuthorizationComponent} from './refuse-authorization/refuse-authorization.component';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  authorizations: [Authorization] ;
  displayedColumns: string[] = ['username', 'reason', 'status', 'date', 'begin hour', 'end hour', 'actions'];
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

  openDialogAccept(idr): void {
    const dialogRef = this.dialog.open(AcceptAuthorizationComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });
    dialogRef.afterClosed().subscribe(r => this.ngOnInit());
  }
  openDialogRefuse(idr): void {
    const dialogRef = this.dialog.open(RefuseAuthorizationComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });
    dialogRef.afterClosed().subscribe(r => this.ngOnInit());
  }
}
