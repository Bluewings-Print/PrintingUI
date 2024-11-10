import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { QuoteService } from 'src/app/container/quote/quoteService/quote.service';
import { DetailedQuote, OrderDetails } from 'src/app/container/quote/detail-quotes/detailQuotes.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-quote',
  templateUrl: './detail-quote.component.html',
  styleUrls: ['./detail-quote.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('expandCollapse', [
      state('void', style({ height: '0', opacity: '0' })),
      state('', style({ height: '', opacity: '1' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class DetailQuoteComponent implements OnInit, OnDestroy {
  quotes: DetailedQuote[] = [];
  expandedQuoteId: string | null = null;
  showImages: { [key: string]: boolean } = {};
  loading = false;
  error: string | null = null;
  private subscription: Subscription | null = null;

  constructor(private quoteService: QuoteService, private toastrService: ToastrService) {}

  ngOnInit() {
    this.loadOrders();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadOrders(): void {
    this.loading = true;
    this.error = null;

    this.subscription = this.quoteService.getAllDetailQuoteDetails().subscribe({
      next: (data: any[]) => {
        this.quotes = data.map((item: any) => item.entity);
        this.loading = false;
      },
      error: (error: Error) => {
        this.error = error.message;
        this.loading = false;
        console.error('Error fetching quotes:', error);
      },
    });
  }

  toggleDetails(quoteId: string): void {
    this.expandedQuoteId = this.expandedQuoteId === quoteId ? null : quoteId;
  }

  isExpanded(quoteId: string): boolean {
    return this.expandedQuoteId === quoteId;
  }

  toggleImages(quoteId: string): void {
    this.showImages[quoteId] = !this.showImages[quoteId];
  }


  retryLoad(): void {
    this.loadOrders();
  }
}