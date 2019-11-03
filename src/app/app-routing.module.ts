import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProjectsComponent} from './projects/projects.component';
import {NavComponent} from './nav/nav.component';
import {ScrumboardComponent} from './scrumboard/scrumboard.component';
import {UsersComponent} from './users/users.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
 }, {
  path: 'dashboard',
  component: NavComponent,
  data: {animation: 'isRight'},
  children: [{
    path: '',
    component: ProjectsComponent
  },
    {
      path: 'scrumboard',
      component: ScrumboardComponent
    }, {
      path: 'users',
      component: UsersComponent
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
