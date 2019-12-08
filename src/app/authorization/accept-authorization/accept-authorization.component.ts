import {Component, Inject, OnInit} from '@angular/core';
import {Authorization} from '../../models/Authorization';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-accept-authorization',
  templateUrl: './accept-authorization.component.html',
  styleUrls: ['./accept-authorization.component.css']
})
export class AcceptAuthorizationComponent implements OnInit {
  authorization: Authorization ;
  constructor( public dialogRef: MatDialogRef<AcceptAuthorizationComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.authorization = this.data.id;
  }
  validate() {
    console.log(this.authorization);
    this.authorization.status = 1;
    this.authorizationService.validate(this.authorization).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }
}
