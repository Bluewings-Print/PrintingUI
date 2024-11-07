import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuickQuotes } from '../quick-quotes/quickQuotes.model';
import { DetailedQuote } from '../detail-quotes/detailQuotes.model';

// export interface DetailQuoteData {
//   // Personal Details
//   firstName: string;
//   lastName: string;
//   company?: string;
//   email: string;
//   phone: string;
//   streetAddress: string;
//   city: string;
//   state: string;
//   postcode: string;

//   // Order Details
//   orders: OrderDetail[];
// }

// export interface OrderDetail {
//   brand: string;
//   styleName: string;
//   color: string;
//   sizes: {
//     s6?: number;
//     s8?: number;
//     m10?: number;
//     l12?: number;
//     xl14?: number;
//     xxl16?: number;
//     xxxl18?: number;
//     xxxxl20?: number;
//     xxxxxl22?: number;
//   };
//   frontArtwork?: File;
//   backArtwork?: File;
//   lhSleeve?: File;
//   rhSleeve?: File;
//   additionalInfo?: string;
// }
@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiDomain = environment.apiDomain

  constructor(private httpClient: HttpClient) { }

  submitDetailQuote(quote: DetailedQuote):Observable<any> {
    const url = `${this.apiDomain}/Quote/AddDetailedQuote`;
    // const httpHeaders = this.getHeaders();
    // const body = JSON.stringify(quote);
    return this.httpClient.post<any>(url, quote).pipe(
      tap((data) => console.log('Form submitted:', data)),
      catchError((err) => this.handleError(err))
    );
  }
  submitQuickQuote(formData: QuickQuotes): Observable<any> {
    const url = `${this.apiDomain}/Quote/AddQuickQuote`;
    // const httpHeaders = this.getHeaders();
    return this.httpClient.post<any>(url, formData).pipe(
      tap((data) => console.log('Form submitted:', data)),
      catchError((err) => {
        console.error('Error:',err);
        throw err;
      })
    );
  }

  getAllDetailQuoteDetails(): Observable<any[]> {
    const url = `${this.apiDomain}/Quote/GetAllDetailedQuote`;
    return this.httpClient.get<any[]>(url).pipe(
      tap((data) => {
        console.log(data);
        return data;
      }),
      catchError((err) => this.handleError(err))
    );
  }

  getAllQuickQuoteDetails(): Observable<any[]> {
    const url = `${this.apiDomain}/Quote/GetAllQuickQuote`;
    return this.httpClient.get<any[]>(url).pipe(
      tap((data) => {
        return data;
      }),
      catchError((err) => this.handleError(err))
    );
  }

  deleteQuote(QuotesId: string): any {
    if (QuotesId) {

      const url = `${this.apiDomain}/Quote/deleteQuote/${QuotesId}`;

      return this.httpClient.delete(url).pipe(
        tap((data) => {
          return data;
        }),
        catchError((err) => this.handleError(err))
      );
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }


  public getHeaders() {
    let httpHeaders = null;
    httpHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return httpHeaders;
  }

}
