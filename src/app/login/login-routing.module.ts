import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login.component';



const routes: Routes = [
    {
        path: '', component:LoginComponent, children: [
            { path: 'signin', component: SignInComponent },
            { path: 'forgotpassword', component: ForgotPasswordComponent }
        ]
    }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
}