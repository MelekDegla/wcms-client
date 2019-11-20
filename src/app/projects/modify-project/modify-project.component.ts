import {Component, Inject, OnInit} from '@angular/core';
import { Project} from '../../models/Project';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectService} from '../../services/project/project.service';

@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.component.html',
  styleUrls: ['./modify-project.component.css']
})
export class ModifyProjectComponent implements OnInit {
  project: Project ;
  constructor(
    public dialogRef: MatDialogRef<ModifyProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.findById(this.data.id).subscribe(res => {
      this.project = res;
      console.log(this.project);
    });
  }
  modify() {
    this.projectService.modify(this.project).subscribe(res => {
      this.dialogRef.close();
    });
  }
}
