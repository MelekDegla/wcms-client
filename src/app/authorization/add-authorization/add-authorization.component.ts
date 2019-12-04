import { Component, OnInit } from '@angular/core';
import {Authorization} from '../../models/Authorization';
import {AuthorizationService} from '../../services/authorization.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-authorization',
  templateUrl: './add-authorization.component.html',
  styleUrls: ['./add-authorization.component.css']
})
export class AddAuthorizationComponent implements OnInit {
  authorization: Authorization ;
  constructor(public dialogRef: MatDialogRef<AddAuthorizationComponent>, private authorizationService: AuthorizationService) { }
  add() {
    console.log(this.authorization);
    this.authorizationService.add(this.authorization).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }
  ngOnInit() {
    this.authorization = new Authorization();
  }



}
