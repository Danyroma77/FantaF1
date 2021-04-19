import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginUserComponent } from './userdefine/login-user/login-user.component';
import { RecoverypwdComponent } from './userdefine/recoverypwd/recoverypwd.component';
import { RegisterUSerComponent } from './userdefine/register-user/register-user.component';
import { ConfirmRegisterComponent } from './userdefine/confirm-register/confirm-register.component';
import { LandingHomeComponent } from './user/landing-home/landing-home.component';
import { LandingUserAdminComponent } from './admin/landing-user-admin/landing-user-admin.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
import { AboutComponent } from './UI/about/about.component';
import { MiniListNewsComponent } from './newspaperpublic/mini-list-news/mini-list-news.component';
import { DetailsNewsComponent } from './newspaperpublic/details-news/details-news.component';
import { PageNotFoundComponent } from './UI/page-not-found/page-not-found.component';
import { BannerFooterComponent } from './UI/banner-footer/banner-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RecoverypwdComponent,
    RegisterUSerComponent,
    ConfirmRegisterComponent,
    LandingHomeComponent,
    LandingUserAdminComponent,
    MyprofileComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MiniListNewsComponent,
    DetailsNewsComponent,
    PageNotFoundComponent,
    BannerFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
