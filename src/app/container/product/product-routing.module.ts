import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductComponent } from './main-product/main-product.component';

const routes: Routes = [
  {
    path:'mainProduct',
    component:MainProductComponent,
    title:'main page for product'
  },
  // {
  //   path:'detailQuote',
  //   component: DetailQuotesComponent,
  //   title:'login by employee'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
