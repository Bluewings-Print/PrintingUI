import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCategoryComponent, children: [
      {
        path: 'AddCategory',
        component: AddCategoryComponent,
        title: 'Add Category'
      },
      {
        path: 'ViewCategory',
        component: ViewCategoryComponent,
        title: 'view Categories'
      },
      {
        path: 'UpdateCategory',
        component: EditCategoryComponent,
        title: 'Update Category'
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
export class CategorymentRoutingModule { }
