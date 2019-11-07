import {AfterViewInit, Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  username = localStorage.username;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private userService: UserService) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.userService.findUserWithToken().subscribe(res => {
      // @ts-ignore
      this.username = res.username;
    });
  }


}
