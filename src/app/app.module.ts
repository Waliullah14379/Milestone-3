import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { SignUpComponent } from './pages/authentication/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './pages/authentication/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/authentication/reset-password/reset-password.component';
import { AboutUsComponent } from './pages/static-content/about-us/about-us.component';
import { TearmsAndConditionComponent } from './pages/static-content/tearms-and-condition/tearms-and-condition.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BooksManagementComponent } from './pages/books-management/books-management.component';
import { ExamNewsComponent } from './pages/announcement-management/exam-news/exam-news.component';
import { ProgramsComponent } from './pages/announcement-management/programs/programs.component';
import { VolunteersComponent } from './pages/volunteer-management/volunteers/volunteers.component';
import { OrganizarComponent } from './pages/volunteer-management/organizar/organizar.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
// import {MatrialModule} from './matrialModule';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    AboutUsComponent,
    TearmsAndConditionComponent,
    DashboardComponent,
    BooksManagementComponent,
    ExamNewsComponent,
    ProgramsComponent,
    VolunteersComponent,
    OrganizarComponent,
    HeaderComponent,
    FooterComponent,
    // MatrialModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
