import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuickQuotesComponent } from './quick-quotes/quick-quotes.component';
import { DetailQuotesComponent } from './detail-quotes/detail-quotes.component';


@NgModule({
  declarations: [
    QuickQuotesComponent,
    DetailQuotesComponent
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule
  ]
})
export class QuoteModule { }
