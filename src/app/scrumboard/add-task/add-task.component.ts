import {Component, Inject, OnInit} from '@angular/core';
import {Task} from '../../models/Task';
import {TaskService} from '../../services/task/task.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Project} from '../../models/Project';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();
  constructor(private taskService: TaskService, private dialogRef: MatDialogRef<AddTaskComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }
  save() {
    this.task.status = 1;
    this.task.project = new Project();
    this.task.project.id = this.data.id;
    this.taskService.add(this.task).subscribe(r => {
      this.dialogRef.close();
    });
  }
  ngOnInit() {
    this.task = new Task();
    console.log(this.data);
  }

}
