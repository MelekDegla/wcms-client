import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoveUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) { }

  ngOnInit() {
  }
  remove() {
    this.userService.remove(this.data.id).subscribe(res => {
      this.ngOnInit();
      this.dialogRef.close();
    });
  }
}
