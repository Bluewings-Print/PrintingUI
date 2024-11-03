import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiDomain = environment.apiDomain

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      console.log('An error occured:', error.error);
      console.error('An error occured:', error.error);
      this.toastr.error(error.error.Message, 'Access denied');
    }
    else {
      console.log('An error occured:', error.error);
      console.error(`BackEnd returned code ${error.status}, body was: `, error.error);
      this.toastr.error(error.error.Message, 'Access denied');
    }

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
