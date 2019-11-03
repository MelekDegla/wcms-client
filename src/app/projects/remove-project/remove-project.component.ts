import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectService} from '../../services/project/project.service';

@Component({
  selector: 'app-remove-project',
  templateUrl: './remove-project.component.html',
  styleUrls: ['./remove-project.component.css']
})
export class RemoveProjectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoveProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectService) { }

  ngOnInit() {
    console.log(this.data.id);
  }
  remove() {
    this.projectService.remove(this.data.id).subscribe(res => {
      this.ngOnInit();
      this.dialogRef.close();
    });
  }

}
