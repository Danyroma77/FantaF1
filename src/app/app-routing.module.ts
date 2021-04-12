import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmRegisterComponent } from './confirm-register/confirm-register.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RecoverypwdComponent } from './recoverypwd/recoverypwd.component';
import { RegisterUSerComponent } from './register-user/register-user.component';
import { LandingHomeComponent } from './user/landing-home/landing-home.component';

const routes: Routes = [
  {path:'', component: LoginUserComponent},
  {path:'register', component: RegisterUSerComponent},
  {path:'recoverypwd', component:RecoverypwdComponent},
  {path:'confirmuser', component: ConfirmRegisterComponent},
  {path:'landing', component: LandingHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
