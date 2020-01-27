import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ApproveComponent } from './approve.component';

const routes = [{
    path : '',component:ApproveComponent
}]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ApproveRoutingModule{

}