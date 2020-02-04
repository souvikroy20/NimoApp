import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';




@NgModule({
  declarations: [VerifyComponent, DashboardComponent],
  imports: [
    CommonModule,
    VerifyRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class VerifyModule { }
