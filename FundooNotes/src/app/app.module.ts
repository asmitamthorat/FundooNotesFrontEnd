import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddnotesComponent } from './component/addnotes/addnotes.component';
import { SidenaveComponent } from './component/sidenave/sidenave.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NotesComponent } from './component/notes/notes.component';
import {MatCardModule} from '@angular/material/card';
import { ArchieveComponent } from './component/archieve/archieve.component';
import { ChangeColorComponent } from './component/change-color/change-color.component';
import { TakeNoteComponent } from './component/take-note/take-note.component';
import { DashBoardFinalComponent } from './component/dash-board-final/dash-board-final.component';

import {TokeninterceptorService} from './services/token/tokeninterceptor.service';
import { AuthGuard } from './auth.guard';
import { NoteComponent } from './component/note/note.component';
import { DisplaynoteComponent } from './component/displaynote/displaynote.component';
import { IconComponent } from './component/icon/icon.component';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddnotesComponent,
    SidenaveComponent,
    NotesComponent,
    ArchieveComponent,
    ChangeColorComponent,
    TakeNoteComponent,
    DashBoardFinalComponent,
    NoteComponent,
    DisplaynoteComponent,
    IconComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true,
    },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
