import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { QuoteService } from 'src/app/container/quote/quoteService/quote.service';
import { Subscription } from 'rxjs';


interface QuickQuote {
  id: number;
  fullName: string;
  email: string;
  purpose: string;
  quantity: number;
  garmentType: string;
  gender: string;
  colour: string;
  budget: number;
  postCode: string;
  dateRequired: Date;
  datePosted: Date;
  additionalInfo: string;
  product_Image: string;
}
@Component({
  selector: 'app-quote-management',
  templateUrl: './quote-management.component.html',
  styleUrls: ['./quote-management.component.css'],
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
      state('*', style({ height: '*', opacity: '1' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class QuoteManagementComponent implements OnInit {
  quotes: QuickQuote[] = [];
  expandedQuoteId: number | null = null;
  showImages: { [key: number]: boolean } = {};
  loading = false;
  error: string | null = null;
  private subscription: Subscription | null = null;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.loadQuotes();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  private loadQuotes(): void {
    this.loading = true;
    this.error = null;

    this.subscription = this.quoteService.getAllQuickQuoteDetails().subscribe({
      next: (data: QuickQuote[]) => {
        this.quotes = data;
        this.loading = false;
      },
      error: (error: Error) => {
        this.error = error.message;
        this.loading = false;
        console.error('Error fetching quotes:', error);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  toggleDetails(quoteId: number): void {
    this.expandedQuoteId = this.expandedQuoteId === quoteId ? null : quoteId;
  }

  toggleImages(quoteId: number): void {
    this.showImages[quoteId] = !this.showImages[quoteId];
  }

  isExpanded(quoteId: number): boolean {
    return this.expandedQuoteId === quoteId;
  }
  retryLoad(): void {
    this.loadQuotes();
  }
}