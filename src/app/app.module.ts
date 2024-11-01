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
import { DashboardComponent } from './container/admin/dashboard/dashboard.component';
import { LoginComponent } from './container/admin/login/login.component';
import { SignupComponent } from './container/admin/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './container/admin/admin/admin.component';

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
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
