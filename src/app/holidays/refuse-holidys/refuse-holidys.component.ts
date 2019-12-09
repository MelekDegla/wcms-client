import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HolidaysService} from '../../services/holidays/holidays.service';
import {Holiday} from '../../models/holiday';
import {User} from "../../models/User";

@Component({
  selector: 'app-refuse-holidys',
  templateUrl: './refuse-holidys.component.html',
  styleUrls: ['./refuse-holidys.component.css']
})
export class RefuseHolidysComponent implements OnInit {

  holiday: Holiday ;
  constructor( public dialogRef: MatDialogRef<RefuseHolidysComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, private holidaysService: HolidaysService) { }

  ngOnInit() {
    this.holiday = this.data.id;
  }
  validate() {
    console.log(this.holiday);
    this.holiday.status = -1;
    const id  = this.holiday.user.id;
    this.holiday.user = new User();
    this.holiday.user.id = id;
    this.holidaysService.validate(this.holiday).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }

}
