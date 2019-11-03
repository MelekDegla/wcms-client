import { Component, OnInit } from '@angular/core';
import {Login} from '../models/Login';
import {UserService} from '../services/user/user.service';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/user/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-120%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateX(100%)' }))
      ])
    ]) ,
    trigger('shakeit', [
      state('shakestart', style({
        transform: 'scale(1)',
      })),
      state('shakeend', style({
        transform: 'scale(1)',
      })),
      transition('shakestart => shakeend', animate('1000ms ease-in',     keyframes([
        style({transform: 'translate3d(-1px, 0, 0)', offset: 0.1}),
        style({transform: 'translate3d(2px, 0, 0)', offset: 0.2}),
        style({transform: 'translate3d(-4px, 0, 0)', offset: 0.3}),
        style({transform: 'translate3d(4px, 0, 0)', offset: 0.4}),
        style({transform: 'translate3d(-4px, 0, 0)', offset: 0.5}),
        style({transform: 'translate3d(4px, 0, 0)', offset: 0.6}),
        style({transform: 'translate3d(-4px, 0, 0)', offset: 0.7}),
        style({transform: 'translate3d(2px, 0, 0)', offset: 0.8}),
        style({transform: 'translate3d(-1px, 0, 0)', offset: 0.9}),
      ]))),
    ])]
})
export class LoginComponent implements OnInit {
  states = {};
  hide = true;
  login: Login;
  constructor(  private userService: UserService, private authService: AuthenticationService, private router: Router) {
    this.states['state1'] = 'shakestart';
  }

  shakeMe(stateVar: string) {
    this.states[stateVar] = (this.states[stateVar] === 'shakestart' ? 'shakeend' : 'shakestart');
  }

  shakeEnd(stateVar: string, event) {
    this.states[stateVar] = 'shakeend';
  }
  signin() {
    this.authService.authenticate(this.login).subscribe(res => {
      console.log(res);
      // @ts-ignore
      localStorage.token = res.token;
      this.router.navigateByUrl('/dashboard');
      this.userService.findUserWithToken().subscribe(result => {
        console.log(result);
      });
    }, err => {
      this.shakeMe('state1');
    });
  }
  ngOnInit() {
    this.login = new Login();

  }

}
