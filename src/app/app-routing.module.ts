import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { ServicesComponent } from './container/services/services.component';
import { PriceListComponent } from './container/price-list/price-list.component';
import { HowToOrderComponent } from './container/how-to-order/how-to-order.component';
import { FaqComponent } from './container/faq/faq.component';
import { ContactComponent } from './container/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'services', component: ServicesComponent, title: 'Our Services' },
  {
    path: 'products',
    loadChildren: () => import('./container/product/product.module').then(m => m.ProductModule),
    title: 'Products'
  },
  {
    path: 'auth',
    loadChildren: () => import('./container/auth/auth.module').then(m => m.AuthModule),
    title: 'User Authentication'
  },
  {
    path: 'sidePanel',
    loadChildren: () => import('./container/admin/side-panel/side-panel.module').then(m => m.SidePanelModule),
    title: 'Admin Panel'
  },
  { path: 'priceList', component: PriceListComponent, title: 'Price List' },
  { path: 'howToOrder', component: HowToOrderComponent, title: 'How to Order' },
  { path: 'faq', component: FaqComponent, title: 'Frequently Asked Questions' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  {
    path: 'quote',
    loadChildren: () => import('./container/quote/quote.module').then(m => m.QuoteModule),
    title: 'Get a Quote'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
