import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VerifyComponent } from './verify.component';

const routes = [{
    path: '', component: VerifyComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VerifyRoutingModule { }