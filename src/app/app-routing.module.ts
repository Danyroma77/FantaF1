import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmRegisterComponent } from './userdefine/confirm-register/confirm-register.component';
import { LoginUserComponent } from './userdefine/login-user/login-user.component';
import { RecoverypwdComponent } from './userdefine/recoverypwd/recoverypwd.component';
import { RegisterUSerComponent } from './userdefine/register-user/register-user.component';
import { LandingHomeComponent } from './user/landing-home/landing-home.component';
import { AboutComponent } from './UI/about/about.component';
import { MiniListNewsComponent } from './newspaperpublic/mini-list-news/mini-list-news.component';
import { PageNotFoundComponent } from './UI/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'login', component: LoginUserComponent},
  { path: '', component: LoginUserComponent },
  {path:'register', component: RegisterUSerComponent},
  {path:'recoverypwd', component:RecoverypwdComponent},
  {path:'recoverypwd/:obj', component: RecoverypwdComponent},
  {path:'confirmuser', component: ConfirmRegisterComponent},
  {path:'landing', component: LandingHomeComponent},
  {path:'About', component: AboutComponent},
  {path: 'newsopen', component: MiniListNewsComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
