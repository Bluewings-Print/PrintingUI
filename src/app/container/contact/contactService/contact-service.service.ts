import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../contactModel/contact.model';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiDomain = environment.apiDomain

  constructor(private httpClient: HttpClient) {}

  submitContactDetail(formData: Contact): Observable<any> {
    const url = `${this.apiDomain}/Contact/AddContactDetail`;
    return this.httpClient.post<any>(url, formData).pipe(
      tap((data) => console.log('Form submitted:', data)),
      catchError((err) => this.handleError(err))
    );
  }

  getAllContactDetails(): any {
    const url = `${this.apiDomain}/Contact/GetAllContact`;
    return this.httpClient.get<any>(url).pipe(
      tap((data) => {
        return data;
      }),
      catchError((err) => this.handleError(err))
    );
  }
  
  
  
  deleteContact(ContactId:string): any {
    if (ContactId) {
  
      const url = `${this.apiDomain}/Contact/deleteContact/${ContactId}`;
    
      return this.httpClient.delete(url).pipe(
        tap((data) => {
          return data;
        }),
        catchError((err) => this.handleError(err))
      );
    }
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

  generateRandomContactID(): string {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
    const randomID = Math.floor(Math.random() * (max - min + 1)) + min; // Generate random number
    return randomID.toString(); // Convert to string
  }

}
