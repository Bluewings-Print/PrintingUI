import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './container/home/home.component';
import { ServicesComponent } from './container/services/services.component';
import { PriceListComponent } from './container/price-list/price-list.component';
import { HowToOrderComponent } from './container/how-to-order/how-to-order.component';
import { FaqComponent } from './container/faq/faq.component';
import { ContactComponent } from './container/contact/contact.component';
import { AdminProductComponent } from './container/admin/admin-product/admin-product.component';
import { DashboardComponent } from './container/admin/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PriceListComponent,
    HowToOrderComponent,
    FaqComponent,
    ContactComponent,
    AdminProductComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
