import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthorizationService} from '../../services/authorization.service';
import {Authorization} from '../../models/Authorization';

@Component({
  selector: 'app-modify-authorization',
  templateUrl: './modify-authorization.component.html',
  styleUrls: ['./modify-authorization.component.css']
})
export class ModifyAuthorizationComponent implements OnInit {

  auth: Authorization;
  constructor( public dialogRef: MatDialogRef<ModifyAuthorizationComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthorizationService) { }

  ngOnInit() {
    this.auth = this.data.id;
  }

  modify() {
    this.authService.modify(this.data.id).subscribe(res => {
      this.dialogRef.close();
    });
  }

}
