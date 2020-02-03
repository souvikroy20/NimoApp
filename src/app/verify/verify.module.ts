import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [VerifyComponent, DashboardComponent],
  imports: [
    CommonModule,
    VerifyRoutingModule
  ]
})
export class VerifyModule { }
