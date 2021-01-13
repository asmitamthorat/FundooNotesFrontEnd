import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component'; 
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component'; 
import {DashboardComponent}  from './component/dashboard/dashboard.component';
import {AddnotesComponent} from './component/addnotes/addnotes.component';
import {DashBoardFinalComponent} from './component/dash-board-final/dash-board-final.component';
import {SidenaveComponent} from './component/sidenave/sidenave.component';
import { TakeNoteComponent} from './component/take-note/take-note.component'
import { AuthGuard } from './auth.guard';
import {NoteComponent} from './component/note/note.component'




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'resetPassword',component:ResetPasswordComponent},
  {path:  'forgotPassword',component:ForgotPasswordComponent},
  {path:'dashboard',component:DashboardComponent},
  {
    path: 'addnotes',
    component:AddnotesComponent,
    canActivate:[AuthGuard]
  },
  {path:'DashBoardFinalComponent' ,component:DashBoardFinalComponent},

  {
    path:'home',
    component:SidenaveComponent,
    canActivate:[AuthGuard]
  },
  {path:'takenote',component:TakeNoteComponent},
  
  {
    path:'displaynotes',
    component:NoteComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
