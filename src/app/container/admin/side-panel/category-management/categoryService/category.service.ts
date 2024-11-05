import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../categoryModel/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiDomain = environment.apiDomain

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  addCategory(category: CategoryModel): any {
  
    let categorydata;
    const url = `${this.apiDomain}/Category/AddCategory`
    if (category) {
      const body = JSON.stringify(category);
      let httpheaders = this.getHeaders();
      // this.loggerService.loggerEvent('CategoryService',"addCategory", JSON.stringify(body));
      return this.httpClient.post<any>(url, body, httpheaders).pipe(
        tap((data) => {
 
        }),
        catchError((err) => this.handleError(err))
      )
    };
  }

  getCategoryDetail(categoryId: number): any {

    if (categoryId) {
      const url = `${this.apiDomain}/Category/GetCategoryById/${categoryId}`
      this.httpClient.get<any>(url).pipe(
        tap((data) => {
        
          return data;
        }),
        catchError((err) => this.handleError(err))
      )
    }
  }

  getAllCategoryDetails(): any {

    let categoryDetails : any;
    const url = `${this.apiDomain}/Category/GetAllCategory`
    categoryDetails = this.httpClient.get<any>(url).pipe(
      tap((data) => {
     
      }),
      catchError((err) => this.handleError(err))
    )
    return categoryDetails;
  }

  // getAllCategoryTypeDetails() {

  //   const url = `${this.apiDomain}/Category/GetAllCategoryType`
  //   return this.httpClient.get<any>(url).pipe(
  //     tap((data) => {

  //     }),
  //     catchError((err) => this.handleError(err))
  //   )
  // }

  updateCategoryDetails(category: CategoryModel): any {
 
    const url = `${this.apiDomain}/Category/UpdateCategory`
    const body = { category: category }
    // this.loggerService.loggerEvent('CategoryService',"updateCategoryDetails", JSON.stringify(body));
    return this.httpClient.put<any[]>(url, body).pipe(
      tap((data) => {
    
        return data;
      }),
      catchError((err) => this.handleError(err))
    )
  }

  deleteCategory(categoryId: number): any {
 
    if (categoryId) {
      const url = `${this.apiDomain}/Category/DeleteCategory/${categoryId}`
      // this.loggerService.loggerEvent('CategoryService',"deleteCategory", JSON.stringify(`CategoryId: ${categoryId}`));
      return this.httpClient.delete(url).pipe(
        tap((data) => {

        }),
        catchError((err) => this.handleError(err))
      )
    }
  }



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
