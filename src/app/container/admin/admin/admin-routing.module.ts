import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'adminProduct', loadChildren: () => import('../admin-product/admin-product.module').then(m => m.AdminProductModule) },
      { path: 'adminCategory', loadChildren: () => import('../category/category.module').then(m => m.CategoryModule) },
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
