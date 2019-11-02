import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fader, slider} from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider]
})
export class AppComponent {
  title = 'wcms-client';

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
    return outlet && outlet.activatedRoute && outlet.activatedRouteData.animation;
    }
  }
}
