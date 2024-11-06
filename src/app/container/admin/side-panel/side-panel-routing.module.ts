import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidePanelComponent } from './side-panel.component';
import { QuoteManagementComponent } from './quote-management/quote-management.component';
import { HelpManagementComponent } from './help-management/help-management.component';
import { DetailQuoteComponent } from './detail-quote/detail-quote.component';

const routes: Routes = [
  {
    path: '', 
    component: SidePanelComponent, 
    children: [
      { 
        path: 'categoryManagement', 
        loadChildren: () => import('./category-management/category-management.module').then(m => m.CategoryManagementModule), 
        title: 'Category Management'
      },
      { 
        path: 'productManagement', 
        loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule), 
        title: 'Product Management' 
      },
      { 
        path: 'quoteManagement', 
        component: QuoteManagementComponent, 
        title: 'Quote Management' 
      },
      { 
        path: 'detailQuoteManagement', 
        component: DetailQuoteComponent, 
        title: 'Quote Details' 
      },
      { 
        path: 'helpManagement', 
        component: HelpManagementComponent, 
        title: 'Help Management' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidePanelRoutingModule { }
