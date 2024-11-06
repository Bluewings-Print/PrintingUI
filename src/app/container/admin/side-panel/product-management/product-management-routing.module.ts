import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

const routes: Routes = [
  {
    path: '',
    component: ViewProductComponent,
    children: [
      {
        path: 'AddProduct',
        component: AddProductComponent,
        title: 'Add Product'
      },
      {
        path: 'ViewProduct',
        component: ViewProductComponent,
        title: 'View Products'
      },
      {
        path: 'UpdateProduct',
        component: EditProductComponent,
        title: 'Update Product'
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
export class ProductManagementRoutingModule { }
