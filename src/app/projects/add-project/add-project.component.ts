import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/Project';
import {ProjectService} from '../../services/project/project.service';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  project: Project;
  addForm: FormGroup;
  constructor(private projectService: ProjectService, private addfb: FormBuilder,  public dialogRef: MatDialogRef<AddProjectComponent>) {
    this.addForm = this.addfb.group({
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ])
    });
    this.onValueChanges();
  }

  add() {
    if (this.addForm.invalid) { return; }
    /*this.addForm.setValue({
      name: this.project.name,
      description: this.project.description
    });*/
    this.projectService.add(this.project).subscribe(res => {
        console.log(res);
        this.dialogRef.close();
      });
  }
  onValueChanges(): void {
     this.addForm.get('name').valueChanges.subscribe(value => {
       this.project.name = value ;
       console.log(typeof value);
     });
     this.addForm.get('description').valueChanges.subscribe(value => {
      this.project.description = value ;
      console.log(typeof value);
    });
    /*this.addForm.setValue({
        name: this.project.name,
        description: this.project.description
      });*/
  }
    ngOnInit() {
     this.project = new Project();
}
  get name() { return this.addForm.get('name'); }
  get description() { return this.addForm.get('description'); }
}

