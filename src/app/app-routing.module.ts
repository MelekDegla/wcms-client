import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProjectsComponent} from './projects/projects.component';
import {NavComponent} from './nav/nav.component';
import {ScrumboardComponent} from './scrumboard/scrumboard.component';
import {UsersComponent} from './users/users.component';
import {DashboardGuard} from './guards/dashboard.guard';
import {SettingsComponent} from './settings/settings.component';
import {HolidaysComponent} from './holidays/holidays.component';

import {AuthorizationComponent} from './authorization/authorization.component';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
 }, {
  path: 'main',
  component: MainComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'projects',
    component: ProjectsComponent
  }, {
    path: 'scrumboard/:id',
    component: ScrumboardComponent
  }]
},   {
  path: 'dashboard',
  component: NavComponent,
  canActivate: [DashboardGuard],
  data: {animation: 'isRight'},
  children: [{
    path: '',
    component: ProjectsComponent
  },
    {
      path: 'scrumboard/:id',
      component: ScrumboardComponent
    }, {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    },
    {
      path: 'conges',
      component: HolidaysComponent
    }

 , {
    path: 'authorizations',
      component: AuthorizationComponent
    }]
}, {
  path: '**',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
