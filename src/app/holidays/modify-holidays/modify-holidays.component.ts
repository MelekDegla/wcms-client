import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HolidaysService} from '../../services/holidays/holidays.service';
import {Holiday} from '../../models/holiday';
import {User} from "../../models/User";

@Component({
  selector: 'app-modify-holidays',
  templateUrl: './modify-holidays.component.html',
  styleUrls: ['./modify-holidays.component.css']
})
export class ModifyHolidaysComponent implements OnInit {

  holiday: Holiday;
  constructor(public dialogRef: MatDialogRef<ModifyHolidaysComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private holidayService: HolidaysService) { }

  ngOnInit() {
    this.holiday = this.data.id;
  }

  modify() {
    const id  = this.holiday.user.id;
    this.holiday.user = new User();
    this.holiday.user.id = id;
    this.holidayService.modify(this.holiday).subscribe( res => {
      this.dialogRef.close();
    });
  }

}
