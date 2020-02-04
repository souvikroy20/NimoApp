import { Component } from '@angular/core';

@Component({
    selector : 'app-verify',
    templateUrl:'verify.component.html'
})
export class VerifyComponent{
    columnDefs=[
        {headerName:'Name',field:'name'},
        {headerName:'Verified',field:'verified'},
        {headerName:'Due Amount',field:'dueamount'}
    ];
    rowData=[
        {name:"Narayan",verified:"Button Here",dueamount:"Modal here"},
        {name:"Rajesh",verified:"Button Here",dueamount:"Modal here"},
        {name:"Omik",verified:"Button Here",dueamount:"Modal here"}
    ];

}