import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { ServicesComponent } from './container/services/services.component';
import { PriceListComponent } from './container/price-list/price-list.component';
import { HowToOrderComponent } from './container/how-to-order/how-to-order.component';
import { FaqComponent } from './container/faq/faq.component';
import { ContactComponent } from './container/contact/contact.component';
import { LoginComponent } from './container/auth/login/login.component';
import { SignupComponent } from './container/auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'products',
    loadChildren: () => import('./container/product/product.module').then(m => m.ProductModule)
  },  {
    path: 'auth',
    loadChildren: () => import('./container/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'priceList', component: PriceListComponent },
  { path: 'howToOrder', component: HowToOrderComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'quote',
    loadChildren: () => import('./container/quote/quote.module').then(m => m.QuoteModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./container/admin/admin/admin.module').then(m => m.AdminModule),
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
