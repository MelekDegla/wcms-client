import {Component, Inject, OnInit} from '@angular/core';
import {Task} from '../../models/Task';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {TaskService} from '../../services/task/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task;
  constructor(private taskService: TaskService, private dialogRef: MatDialogRef<AddTaskComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  save() {
    this.task.status = this.data.status;
    // @ts-ignore
    this.task.project = {id: this.data.idproject};
    this.taskService.add(this.task).subscribe(res => {
      console.log(res);
      this.dialogRef.close();

    });
  }




  ngOnInit() {
    this.task = new Task();
  }

}
