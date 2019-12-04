import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-remove-authorization',
  templateUrl: './remove-authorization.component.html',
  styleUrls: ['./remove-authorization.component.css']
})
export class RemoveAuthorizationComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RemoveAuthorizationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthorizationService) { }

  ngOnInit() {
  }
  remove() {
    this.auth.remove(this.data.id).subscribe(res => { this.dialogRef.close()} );

}
}
