import {Component, Inject, OnInit} from '@angular/core';
import {Task} from '../../models/Task';
import {TaskService} from '../../services/task/task.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})
export class DetailsTaskComponent implements OnInit {
  private task: Task = new Task();

  constructor(private taskService: TaskService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DetailsTaskComponent>) {
  }

  ngOnInit() {
    this.taskService.findById(this.data.id).subscribe(res => {
      this.task = res;
      console.log(this.task );
    });
  }

  modify() {
    console.log(this.task);
    this.taskService.modify(this.task).subscribe(res => {
      console.log(res);
      this.dialogRef.close();


    });
  }
}
