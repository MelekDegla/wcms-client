import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MAT_DIALOG_DATA, MatBottomSheetRef} from '@angular/material';
import {Log} from '../../models/Log';
import {TaskService} from '../../services/task/task.service';
import {ProjectService} from '../../services/project/project.service';
import {Project} from '../../models/Project';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {


  constructor(private bottomSheetRef: MatBottomSheetRef<LogComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) private data: any, private taskService: ProjectService) { }
  project = Project;
  logs: Log[];
  ngOnInit() {
    this.logs = [];
    this.taskService.findById(this.data.id).subscribe(res => {
      // @ts-ignore
      this.project = res;
      // @ts-ignore
      this.project.tasks.forEach(t  => t.logs.forEach(a => this.logs.push(a)));
    });
  }

}
