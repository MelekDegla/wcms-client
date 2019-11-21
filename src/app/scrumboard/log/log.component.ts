import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MAT_DIALOG_DATA, MatBottomSheetRef} from '@angular/material';
import {Log} from '../../models/Log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {


  constructor(private bottomSheetRef: MatBottomSheetRef<LogComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) private data: any) { }

  logs: Log[];
  ngOnInit() {
    this.logs = [];
    this.logs = this.data.log;
  }

}
