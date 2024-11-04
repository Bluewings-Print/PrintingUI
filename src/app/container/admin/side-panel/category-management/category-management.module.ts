import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { CategorymentRoutingModule } from './category-management-routing.module';


@NgModule({
  declarations: [
    AddCategoryComponent,
    ViewCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent
  ],
  imports: [
    CommonModule,
    CategorymentRoutingModule
  ]
})
export class CategoryManagementModule { }
