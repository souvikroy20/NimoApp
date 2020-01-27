import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ApplyComponent } from './apply.component';

const routes = [{
    path:'', component: ApplyComponent
}]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ApplyRoutingModule{

}