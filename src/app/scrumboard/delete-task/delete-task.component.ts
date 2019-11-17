import {Component, Inject, OnInit} from '@angular/core';
import {TaskService} from "../../services/task/task.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private dialogRef: MatDialogRef<DeleteTaskComponent>, @Inject (MAT_DIALOG_DATA) private data: any ) { }
remove(){
    this.taskService.remove(this.data.id).subscribe(res => {
      this.dialogRef.close();
    });
}
  ngOnInit() {
  }

}
