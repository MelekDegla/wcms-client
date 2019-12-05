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
import {User} from '../models/User';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
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
              private snackBar: MatSnackBar) {}

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

}
