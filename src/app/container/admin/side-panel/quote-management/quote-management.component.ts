import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { QuoteService } from 'src/app/container/quote/quoteService/quote.service';
import { Subscription } from 'rxjs';
import { QuickQuotes } from 'src/app/container/quote/quick-quotes/quickQuotes.model';


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
    trigger('detailExpand', [ // Add this trigger
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('300ms ease-out')),
    ]),
  ]
})
export class QuoteManagementComponent implements OnInit {
  quotes: QuickQuotes[] = []; 
  expandedQuoteId: string | null = null;
  showImages: { [key: string]: boolean } = {};
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
      next: (data: any[]) => {
        console.log(data);
        // Extracts each `entity` object
        this.quotes = data.map((item: any) => item.entity);
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

  toggleDetails(quoteId: any): void {
    this.expandedQuoteId = this.expandedQuoteId === quoteId ? null : quoteId;
  }

  toggleImages(quoteId: any): void {
    const key = String(quoteId);
    this.showImages[key] = !this.showImages[key];
  }


  
  isExpanded(quoteId: any): boolean {
    return this.expandedQuoteId === quoteId;
  }
  retryLoad(): void {
    this.loadQuotes();
  }
}