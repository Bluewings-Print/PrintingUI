import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductComponent } from './main-product/main-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path:'mainProduct',
    component:MainProductComponent,
    title:'main page for product'
  },
  {
    path:'detailProduct',
    component: ProductDetailsComponent,
    title:'product detail apge'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
