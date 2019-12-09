import { Component, OnInit } from '@angular/core';
import {Holiday} from '../../models/holiday';
import {MatDialogRef} from '@angular/material';
import {HolidaysService} from '../../services/holidays/holidays.service';
import {User} from "../../models/User";

@Component({
  selector: 'app-add-holidays',
  templateUrl: './add-holidays.component.html',
  styleUrls: ['./add-holidays.component.css']
})
export class AddHolidaysComponent implements OnInit {
  holiday: Holiday;
  constructor(public dialogRef: MatDialogRef<AddHolidaysComponent>, private holidayService: HolidaysService) { }

  ngOnInit() {
    this.holiday = new Holiday();
  }

  add() {

    this.holidayService.add(this.holiday).subscribe(res => {
      this.dialogRef.close();
    });
  }

}
