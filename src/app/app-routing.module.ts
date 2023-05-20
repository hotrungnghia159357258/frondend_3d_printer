import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import { DaskboardComponent } from './dataAccess/daskboard/daskboard.component';
import { AuthGuard } from './guard/auth.guard';
import { UploadComponent } from './dataAccess/upload/upload.component';

const routes: Routes = [
  { path: '',redirectTo:'home',pathMatch:'full'},
  { path: 'home',component:HomePageComponent },
  { path: 'option1',component:UploadComponent },
  { path: 'option2',component:HomePageComponent },
  { path: 'option3',component:HomePageComponent },
  { path: 'option4',component:HomePageComponent } ,
  { path: 'logform',component:LoginFormComponent } ,
  { path: 'registerform',component:RegisterFormComponent} ,
  { path: 'daskboard',component:DaskboardComponent,canActivate:[AuthGuard]} ,
  { path: '**',component:BlankPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
