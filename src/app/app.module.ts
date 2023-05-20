import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {ToastrModule} from 'ngx-toastr'
 

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { MaterialModule } from 'src/Material-model';
import {RegisterFormComponent} from './register-form/register-form.component';
import { DaskboardComponent } from './dataAccess/daskboard/daskboard.component';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './token.interceptor';
import { UploadComponent } from './dataAccess/upload/upload.component';
//import * as THREE from "three";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginFormComponent,
    HomePageComponent,
    BlankPageComponent,
    RegisterFormComponent,
    DaskboardComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgToastModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
