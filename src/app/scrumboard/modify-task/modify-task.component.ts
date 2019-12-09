import {Component, Inject, OnInit} from '@angular/core';
import { Task } from 'src/app/models/Task';
import {TaskService} from '../../services/task/task.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent implements OnInit {
private task: Task = new Task();
  constructor(private taskService: TaskService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<ModifyTaskComponent>) { }
  save() {

    // @ts-ignore
    this.task.project = {id: this.data.idproject};
    this.taskService.add(this.task).subscribe(res => {
      console.log(res);
      this.dialogRef.close();

    });
  }
  ngOnInit() {
    this.taskService.findById(this.data.id).subscribe(res => {
      this.task = res;
    });
  }

}
