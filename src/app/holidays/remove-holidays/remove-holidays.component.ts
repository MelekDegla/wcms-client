import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HolidaysService} from '../../services/holidays/holidays.service';

@Component({
  selector: 'app-remove-holidays',
  templateUrl: './remove-holidays.component.html',
  styleUrls: ['./remove-holidays.component.css']
})
export class RemoveHolidaysComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveHolidaysComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private holidayService: HolidaysService) { }

  ngOnInit() {
  }
  remove() {
    this.holidayService.remove(this.data.id).subscribe(res => {
      this.dialogRef.close();
    });
  }

}
