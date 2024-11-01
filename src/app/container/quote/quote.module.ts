import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuickQuotesComponent } from './quick-quotes/quick-quotes.component';
import { DetailQuotesComponent } from './detail-quotes/detail-quotes.component';
import { AppModule } from 'src/app/app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    QuickQuotesComponent,
    DetailQuotesComponent
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class QuoteModule { }
