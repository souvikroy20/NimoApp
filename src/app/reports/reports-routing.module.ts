import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes = [{
    path : '', component:ReportsComponent
}]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ReportRoutingModule{

}