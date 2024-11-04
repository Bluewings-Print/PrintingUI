import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidePanelRoutingModule } from './side-panel-routing.module';
import { HelpManagementComponent } from './help-management/help-management.component';
import { QuoteManagementComponent } from './quote-management/quote-management.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HelpManagementComponent,
    QuoteManagementComponent
  ],
  imports: [
    CommonModule,
    SidePanelRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class SidePanelModule { }
