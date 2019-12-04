import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProjectsComponent} from './projects/projects.component';
import {NavComponent} from './nav/nav.component';
import {ScrumboardComponent} from './scrumboard/scrumboard.component';
import {UsersComponent} from './users/users.component';
import {DashboardGuard} from './guards/dashboard.guard';
import {AuthorizationComponent} from './authorization/authorization.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
 }, {
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
    }, {
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
