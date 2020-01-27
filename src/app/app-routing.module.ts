import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule) },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'approve', pathMatch: 'full' },
      { path: 'approve', loadChildren: () => import('src/app/approve/approve.module').then(m => m.ApproveModule) },
      { path: 'apply', loadChildren: () => import('src/app/apply/apply.module').then(m => m.ApplyModule) },
      { path: 'verify', loadChildren: () => import('src/app/verify/verify.module').then(m => m.VerifyModule) },
      { path: 'reports', loadChildren: () => import('src/app/reports/reports.module').then(m => m.ReportsModule) },
      { path: 'directory', loadChildren: () => import('src/app/directory/directory.module').then(m => m.DirectoryModule) },
      { path: 'admin', loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule) }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
