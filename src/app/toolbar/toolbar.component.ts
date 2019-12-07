import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Notification} from '../models/Notification';
import {User} from '../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user/user.service';
import {MatSnackBar} from '@angular/material';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  username = localStorage.username;
  isAdmin = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  private stompClient: any;
  private serverUrl: string = environment.webservice.baseUrl + 'socket';
  isLoaded = false;
  notifNumber = 0;
  notifications: Notification[] = [];
  private user: User;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private userService: UserService,
              private snackBar: MatSnackBar, private route: ActivatedRoute) {}

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
      this.notifications = res.notifications.filter(n => n.viewed === false);
      // @ts-ignore
      this.user = res;
      this.notifNumber = this.notifications.length;
      // @ts-ignore
      this.isAdmin = res.roles.filter( r => r.name === 'ADMIN').length > 0 ;
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
      this.notifications.push(JSON.parse(res.body));
      this.notifNumber++;
      let audio = new Audio();
      audio.src = '/assets/deduction.mp3';
      audio.load();
      audio.play();
      // @ts-ignore
      this.openSnackBar(JSON.parse(res.body).title + ' : ' + JSON.parse(res.body).body);
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  viewNotifs() {
    this.userService.viewNotification().subscribe(res => {
      // @ts-ignore
        this.notifications = res;
        this.notifications = this.notifications;
        this.notifNumber = this.notifications.filter(n => n.viewed === false).length;
    });
  }

}
