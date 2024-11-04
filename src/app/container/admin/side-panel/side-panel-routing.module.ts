import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidePanelComponent } from './side-panel.component';
import { QuoteManagementComponent } from './quote-management/quote-management.component';
import { HelpManagementComponent } from './help-management/help-management.component';

const routes: Routes = [
  {
    path: '', component: SidePanelComponent, children: [
      { path: 'categoryManagement', loadChildren: () => import('./category-management/category-management.module').then(m => m.CategoryManagementModule) },
      { path: 'productManagement', loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule) },
      { path: 'quoteManagement', component: QuoteManagementComponent },
      { path: 'helpManagement', component: HelpManagementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidePanelRoutingModule { }
