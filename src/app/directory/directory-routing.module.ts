import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory.component';

const routes = [{
    path : '', component:DirectoryComponent
}]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class DirectoryRoutingModule{

}