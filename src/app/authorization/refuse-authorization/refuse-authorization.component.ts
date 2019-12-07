import {Component, Inject, OnInit} from '@angular/core';
import {Authorization} from '../../models/Authorization';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-refuse-authorization',
  templateUrl: './refuse-authorization.component.html',
  styleUrls: ['./refuse-authorization.component.css']
})
export class RefuseAuthorizationComponent implements OnInit {
  authorization: Authorization ;
  constructor( public dialogRef: MatDialogRef<RefuseAuthorizationComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.authorization = this.data.id;
  }
  validate() {
    console.log(this.authorization);
    this.authorization.status = -1;
    this.authorizationService.validate(this.authorization).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }

}
