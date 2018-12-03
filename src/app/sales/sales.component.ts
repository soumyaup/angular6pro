import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  id;
  customer;
  itemname;
  quantity;
  billdate;
  constructor() { }

  ngOnInit() {
  }
  addSales(){
    alert("sales")
  }
}
