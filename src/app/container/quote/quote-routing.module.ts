import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickQuotesComponent } from './quick-quotes/quick-quotes.component';
import { DetailQuotesComponent } from './detail-quotes/detail-quotes.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'LoginPIN',
  //   pathMatch:'full'
  // },
  {
    path:'quickQuote',
    component:QuickQuotesComponent,
    title:'login by admin'
  },
  {
    path:'detailQuote',
    component: DetailQuotesComponent,
    title:'login by employee'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
