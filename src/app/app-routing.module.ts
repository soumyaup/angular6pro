import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RecordComponent } from './record.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';

const routes: Route[] =[
    { path:'record', component:RecordComponent,children:[
      {path:'purchase',component:PurchaseComponent},
      {path: 'sales',component:SalesComponent}
    ]},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
