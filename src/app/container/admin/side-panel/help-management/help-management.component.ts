import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

interface ContactQuery {
  queryId: string;
  name: string;
  phone: string;
  email: string;
  description: string;
  message: string;
  status: 'NEW' | 'PENDING' | 'RESOLVED';
  isExpanded: boolean;
}

@Component({
  selector: 'app-help-management',
  templateUrl: './help-management.component.html',
  styleUrls: ['./help-management.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class HelpManagementComponent implements OnInit {
  queries: ContactQuery[] = [];
  filteredQueries: ContactQuery[] = [];
  searchTerm: string = '';

  ngOnInit() {
    // Simulated data - replace with actual API call
    this.queries = [
      {
        queryId: 'Q001',
        name: 'John Doe',
        phone: '+1 234 567 8900',
        email: 'john@example.com',
        description: 'Product inquiry',
        message: 'I would like to know more about your latest products.',
        status: 'NEW',
        isExpanded: false
      },
      // Add more sample data as needed
    ];
    this.filteredQueries = [...this.queries];
  }

  toggleExpand(query: ContactQuery): void {
    // Close all other expanded queries
    this.queries.forEach(q => {
      if (q !== query) q.isExpanded = false;
    });
    query.isExpanded = !query.isExpanded;
  }

  filterQueries(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredQueries = this.queries.filter(query =>
      query.name.toLowerCase().includes(term) ||
      query.email.toLowerCase().includes(term) ||
      query.queryId.toLowerCase().includes(term)
    );
  }
}
