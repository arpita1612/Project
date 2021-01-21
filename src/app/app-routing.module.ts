import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full' ,data: {title: 'Login'}},
  {path:'login',component:LoginComponent , data: {title: 'Login'} },
  {path:'Student',component:StudentComponent ,data: ['Student',{title: 'Student Page'}] ,canActivate:[AuthGuard]},
  {path:'Admin',component:AdminComponent,data: ['Admin','Student',{title: 'Admin Page'}], 
  canActivate:[AuthGuard]},
  {path:'Register',component:RegisterComponent ,
  data: {title: 'Registration Page'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
