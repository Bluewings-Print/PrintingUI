import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  constructor(private httpClient: HttpClient) {}

  submitDetailQuote(formData: FormData): Observable<any> {
    const url = `${this.apiDomain}/Quote/AddDetailQuote`;
    return this.httpClient.post<any>(url, formData).pipe(
      tap((data) => console.log('Form submitted:', data)),
      catchError((err) => this.handleError(err))
    );
  }
submitQuickQuote(formData: FormData):Observable<any> {
  const url = `${this.apiDomain}/Quote/AddQuickQuote`;
  return this.httpClient.post<any>(url, formData).pipe(
    tap((data) => console.log('Form submitted:', data)),
    catchError((err) => this.handleError(err))
  );
}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      console.log('An error occured:', error.error)
      console.error('An error occured:', error.error)
    }
    else {
      console.log('An error occured:', error.error)
      console.error(`BackEnd returned code ${error.status}, body was: `, error.error);
    }
    // this.loggerService.logException(error);
    // this.loaderService.isLoading(false);
    return throwError(() => error.error.message);
  }

  public getHeaders() {
    let httpHeaders = null;
    httpHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return httpHeaders;
  }

}
