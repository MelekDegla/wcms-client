import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HolidaysService} from '../../services/holidays/holidays.service';
import {Holiday} from '../../models/holiday';
import {User} from "../../models/User";

@Component({
  selector: 'app-accept-holidys',
  templateUrl: './accept-holidys.component.html',
  styleUrls: ['./accept-holidys.component.css']
})
export class AcceptHolidysComponent implements OnInit {

  holiday: Holiday ;
  constructor( public dialogRef: MatDialogRef<AcceptHolidysComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, private holidaysService: HolidaysService) { }

  ngOnInit() {
    this.holiday = this.data.id;
  }
  validate() {
    console.log(this.holiday);
    const id  = this.holiday.user.id;
    this.holiday.user = new User();
    this.holiday.user.id = id;
    this.holiday.status = 1;
    this.holidaysService.validate(this.holiday).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }

}
