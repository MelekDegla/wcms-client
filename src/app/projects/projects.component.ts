import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddProjectComponent} from './add-project/add-project.component';
import {ProjectService} from '../services/project/project.service';
import {Project} from '../models/Project';
import {RemoveProjectComponent} from './remove-project/remove-project.component';
import {ModifyProjectComponent} from './modify-project/modify-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: [Project];
  isAdmin = localStorage.isAdmin === 'true';
  constructor(public dialog: MatDialog, private projectService: ProjectService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openDialogRemove(idr): void {
    const dialogRef = this.dialog.open(RemoveProjectComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openDialogModify(idr): void {
    const dialogRef = this.dialog.open(ModifyProjectComponent, {
      width: '400px',
      data: {
        id: idr
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }



  ngOnInit() {
    this.projectService.list().subscribe(res => {
      this.projects = res;
      console.log(this.projects);
    });
  }


}
