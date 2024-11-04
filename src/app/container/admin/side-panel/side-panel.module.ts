import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidePanelRoutingModule } from './side-panel-routing.module';
import { HelpManagementComponent } from './help-management/help-management.component';
import { QuoteManagementComponent } from './quote-management/quote-management.component';
import { DetailQuoteComponent } from './detail-quote/detail-quote.component';


@NgModule({
  declarations: [
    HelpManagementComponent,
    QuoteManagementComponent,
    DetailQuoteComponent
  ],
  imports: [
    CommonModule,
    SidePanelRoutingModule
  ]
})
export class SidePanelModule { }
