import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
  MAT_DATE_LOCALE, MatBadgeModule, MatBottomSheetModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule, MatDialogRef, MatExpansionModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule, MatProgressBarModule, MatSnackBarModule,
  MatTableModule,
  MatTooltipModule, NativeDateModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';
import {UserService} from './services/user/user.service';
import { NavComponent } from './nav/nav.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RemoveProjectComponent } from './projects/remove-project/remove-project.component';
import { ModifyProjectComponent } from './projects/modify-project/modify-project.component';
import { UsersComponent } from './users/users.component';
import { ModifyUserComponent } from './users/modify-user/modify-user.component';
import { RemoveUserComponent } from './users/remove-user/remove-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddMembersComponent } from './scrumboard/add-members/add-members.component';


import { AddTaskComponent } from './scrumboard/add-task/add-task.component';
import {ModifyTaskComponent} from './scrumboard/modify-task/modify-task.component';
import { DeleteTaskComponent } from './scrumboard/delete-task/delete-task.component';
import { LogComponent } from './scrumboard/log/log.component';
import { MatBottomSheet } from '@angular/material';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AddAuthorizationComponent } from './authorization/add-authorization/add-authorization.component';
import { ModifyAuthorizationComponent } from './authorization/modify-authorization/modify-authorization.component';
import { DetailsTaskComponent } from './scrumboard/details-task/details-task.component';
import { SettingsComponent } from './settings/settings.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { AddHolidaysComponent } from './holidays/add-holidays/add-holidays.component';
import { ModifyHolidaysComponent } from './holidays/modify-holidays/modify-holidays.component';
import { RemoveHolidaysComponent } from './holidays/remove-holidays/remove-holidays.component';


import {RemoveAuthorizationComponent} from './authorization/remove-authorization/remove-authorization.component';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { AcceptAuthorizationComponent } from './authorization/accept-authorization/accept-authorization.component';
import { RefuseAuthorizationComponent } from './authorization/refuse-authorization/refuse-authorization.component';
import { AcceptHolidysComponent } from './holidays/accept-holidys/accept-holidys.component';
import { RefuseHolidysComponent } from './holidays/refuse-holidys/refuse-holidys.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectsComponent,
    NavComponent,
    AddProjectComponent,
    ScrumboardComponent,
    RemoveProjectComponent,
    ModifyProjectComponent,
    UsersComponent,
    ModifyUserComponent,
    RemoveUserComponent,
    AddUserComponent,
    AddMembersComponent,
    AddTaskComponent,
    ModifyTaskComponent,
    DeleteTaskComponent,
    LogComponent,

    AuthorizationComponent,
    AddAuthorizationComponent,
    ModifyAuthorizationComponent,
    SettingsComponent,
    HolidaysComponent,
    AddHolidaysComponent,
    ModifyHolidaysComponent,
    RemoveHolidaysComponent,

    RemoveAuthorizationComponent,
    DetailsTaskComponent,
    MainComponent,
    ToolbarComponent,
    HomeComponent,
    AcceptAuthorizationComponent,
    RefuseAuthorizationComponent,
    AcceptHolidysComponent,
    RefuseHolidysComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    MatDialogModule,
    DragDropModule,
    MatTableModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatNativeDateModule,

    MatCheckboxModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  providers: [UserService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},

  ],

  bootstrap: [AppComponent],



  entryComponents: [AddProjectComponent,
    RemoveProjectComponent,
    ModifyProjectComponent,
    AddUserComponent,
    ModifyUserComponent,
    RemoveUserComponent,
  AddTaskComponent,
  ModifyTaskComponent,

  DeleteTaskComponent, AddMembersComponent, LogComponent, DetailsTaskComponent, AddHolidaysComponent,
  ModifyHolidaysComponent, RemoveHolidaysComponent,
  DeleteTaskComponent,

  AddAuthorizationComponent,
  ModifyAuthorizationComponent,
  RemoveAuthorizationComponent,
  AcceptAuthorizationComponent,
  RefuseAuthorizationComponent,
  AcceptHolidysComponent,
  RemoveHolidaysComponent]


})
export class AppModule { }
