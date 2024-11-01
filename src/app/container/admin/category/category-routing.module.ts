import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

const routes: Routes = [
  {
    path: '', component: AddCategoryComponent, children: [
      {
        path: 'AddCategory',
        component: AddCategoryComponent,
        title: 'Add Category'
      },
      {
        path: 'ViewCategory',
        component: ViewCategoryComponent,
        title: 'View Category'
      },
      {
        path: 'EditCategory',
        component: UpdateCategoryComponent,
        title: 'Edit Category'
      },
      {
        path: 'DeleteCategory',
        component: DeleteCategoryComponent,
        title: 'Delete Category'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
