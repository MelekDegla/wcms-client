import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatTableModule} from '@angular/material';
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
import { NavMainComponent } from './nav-main/nav-main.component';

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
    NavMainComponent,
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
    MatTableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  // tslint:disable-next-line:max-line-length
  entryComponents: [AddProjectComponent, RemoveProjectComponent, ModifyProjectComponent, AddUserComponent, ModifyUserComponent, RemoveUserComponent]
})
export class AppModule { }
