import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
