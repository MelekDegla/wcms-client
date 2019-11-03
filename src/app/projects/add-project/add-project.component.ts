import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/Project';
import {ProjectService} from '../../services/project/project.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  project: Project;

  constructor(private projectService: ProjectService, public dialogRef: MatDialogRef<AddProjectComponent>) { }

  add() {
    this.projectService.add(this.project).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }

  ngOnInit() {
      this.project = new Project();
  }

}
