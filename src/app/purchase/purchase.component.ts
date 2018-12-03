import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
 id;
 supplier;
 itemname;
 quantity;
 billdate;
  constructor() { }

  ngOnInit() {
  }
  addPurchase() {
    alert('hi')
  console.log(this.id);
  }

}
