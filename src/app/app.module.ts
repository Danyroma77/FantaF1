import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RecoverypwdComponent } from './recoverypwd/recoverypwd.component';
import { RegisterUSerComponent } from './register-user/register-user.component';
import { ConfirmRegisterComponent } from './confirm-register/confirm-register.component';
import { LandingHomeComponent } from './user/landing-home/landing-home.component';
import { LandingUserAdminComponent } from './admin/landing-user-admin/landing-user-admin.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { HeaderComponent } from './header/header.component';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
