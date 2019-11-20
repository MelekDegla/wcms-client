import {Component, Inject, OnInit} from '@angular/core';
import { Project} from '../../models/Project';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectService} from '../../services/project/project.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.component.html',
  styleUrls: ['./modify-project.component.css']
})
export class ModifyProjectComponent implements OnInit {
  project: Project ;
  updForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModifyProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private updfb: FormBuilder, private projectService: ProjectService) {
    this.updForm = this.updfb.group({
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ])
    });
    // this.onValueChanges();
  }
  ngOnInit() {
    this.project = new Project();
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
  /*onValueChanges(): void {
    this.updForm.get('name').valueChanges.subscribe(value => {
      this.project.name = value;
    });
    this.updForm.get('description').valueChanges.subscribe(value => {
      this.project.description = value;
    });
  }*/
  get name() { return this.updForm.get('name'); }
  get description() { return this.updForm.get('description'); }
}
