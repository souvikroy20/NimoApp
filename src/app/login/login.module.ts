import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent, SignInComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
