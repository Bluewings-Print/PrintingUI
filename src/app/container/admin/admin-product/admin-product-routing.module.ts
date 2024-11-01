import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {
    path: '', component: AddProductComponent, children: [
      {
        path: 'AddProduct',
        component: AddProductComponent,
        title: 'Add Product'
      },
      {
        path: 'ViewProduct',
        component: ViewProductComponent,
        title: 'View Product'
      },
      {
        path: 'EditProduct',
        component: UpdateProductComponent,
        title: 'Edit Product'
      },
      {
        path: 'DeleteProduct',
        component: DeleteProductComponent,
        title: 'Delete Product'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductRoutingModule { }
