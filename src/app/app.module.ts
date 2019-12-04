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
  MatDialogModule, MatDialogRef,
  MatIconModule,
  MatInputModule, MatNativeDateModule, MatSnackBarModule,
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
import { DetailsTaskComponent } from './scrumboard/details-task/details-task.component';


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
    DetailsTaskComponent
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
    MatSnackBarModule
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
  DeleteTaskComponent, AddMembersComponent, LogComponent, DetailsTaskComponent]

})
export class AppModule { }
