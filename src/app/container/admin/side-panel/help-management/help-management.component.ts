import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/container/contact/contactModel/contact.model';
import { ContactService } from 'src/app/container/contact/contactService/contact-service.service';

// interface ContactQuery {
//   queryId: string;
//   name: string;
//   phone: string;
//   email: string;
//   description: string;
//   message: string;
//   status: 'NEW' | 'PENDING' | 'RESOLVED';
//   isExpanded: boolean;
// }

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
  queries: ContactModel[] = [];
  filteredQueries: ContactModel[] = [];
  searchTerm: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.queries = this.contactService.getAllContactDetails();
    this.filteredQueries = [...this.queries];
  }

  toggleExpand(query: ContactModel): void {
    // Close all other expanded queries
    this.queries.forEach(q => {
      if (q !== query) q.isExpanded = false;
    });
    query.isExpanded = !query.isExpanded;
  }

  filterQueries(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredQueries = this.queries.filter(query =>
      query.firstName.toLowerCase().includes(term) ||
      query.email.toLowerCase().includes(term) ||
      query.id.toLowerCase().includes(term)
    );
  }
}
