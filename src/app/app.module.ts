import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SidePanelComponent } from './container/admin/side-panel/side-panel.component';

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
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
