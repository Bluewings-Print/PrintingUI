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
    title:'Quick quote page'
  },
  {
    path:'detailQuote',
    component: DetailQuotesComponent,
    title:'detail quote page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
