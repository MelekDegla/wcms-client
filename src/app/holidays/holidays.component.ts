import { Component, OnInit } from '@angular/core';
import {Holiday} from '../models/holiday';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {HolidaysService} from '../services/holidays/holidays.service';
import {AddHolidaysComponent} from './add-holidays/add-holidays.component';
import {RemoveHolidaysComponent} from './remove-holidays/remove-holidays.component';
import {ModifyHolidaysComponent} from './modify-holidays/modify-holidays.component';
import {AcceptHolidysComponent} from './accept-holidys/accept-holidys.component';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  holiday: [Holiday];
  displayedColumns: string[] = ['username', 'Start Date', 'End Date', 'Status', 'actions'];
  dataSource;
  isAdmin = localStorage.isAdmin === 'true';
  constructor(public dialog: MatDialog, private holidayService: HolidaysService) { }

  ngOnInit() {
    this.holidayService.list().subscribe(res => {
      this.holiday = res;
      this.dataSource = new MatTableDataSource(this.holiday);
      console.log(this.holiday);
    });
  }
  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddHolidaysComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(r => this.ngOnInit());
  }
  openDialogDelete(idd): void {
    const dialogRef = this.dialog.open(RemoveHolidaysComponent, {
      width: '400px',
      data: {
        id: idd
      }
    });
    dialogRef.afterClosed().subscribe(r => this.ngOnInit());
  }
  openDialogModify(idr): void {
    const dialogRef = this.dialog.open(ModifyHolidaysComponent, {
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
    const dialogRef = this.dialog.open(AcceptHolidysComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });
    dialogRef.afterClosed().subscribe(r => this.ngOnInit());
  }
  openDialogRefuse(idr): void {
    const dialogRef = this.dialog.open(RemoveHolidaysComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });
    dialogRef.afterClosed().subscribe(r => this.ngOnInit());
  }
}
