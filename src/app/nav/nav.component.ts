import {AfterViewInit, Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserService} from '../services/user/user.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {environment} from '../../environments/environment';
import {Notification} from '../models/Notification';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  username = localStorage.username;
  classlist1 = [];
  classlist2 = ['list-item' , 'd-flex', 'justify-content-center'];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  private stompClient: any;
  private serverUrl: string = environment.webservice.baseUrl + 'socket';
  isLoaded = false;
  notifNumber: number = 0;
  notifications: Notification[] = [];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private userService: UserService,
              private snackBar: MatSnackBar) {}
clicked(id, idr) {
    document.getElementById(id).classList.add('active');
    document.getElementById(idr).classList.remove('active');

}
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.userService.findUserWithToken().subscribe(res => {
      // @ts-ignore
      this.username = res.username;
      // @ts-ignore
      this.notifications = res.notifications;
      this.notifNumber = this.notifications.length;
    });
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, frame => {
      that.isLoaded = true;
      that.openGlobalSocket();
    }, err => {
      console.log(err);
    });
  }
  openGlobalSocket() {
    this.stompClient.subscribe('/notifications/' + this.username, (res) => {
      console.log(res);
      this.notifications.push(JSON.parse(res.body));
      this.notifNumber++;
      // @ts-ignore
      this.openSnackBar(JSON.parse(res.body).title + ' : ' + JSON.parse(res.body).body);
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
