import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductRoutingModule } from './admin-product-routing.module';

import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';


@NgModule({
  declarations: [
    ViewProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    AdminProductRoutingModule
  ]
})
export class AdminProductModule { }
