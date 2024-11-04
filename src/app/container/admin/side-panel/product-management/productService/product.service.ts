import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Product } from 'src/app/container/product/productModel/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiDomain = environment.apiDomain

  constructor(private httpClient: HttpClient) {}



  addProduct(productDetails: any): any {
    
    const url = `${this.apiDomain}/Product/AddProduct`;
    // this.loggerService.loggerEvent('ProductService',"addProduct", JSON.stringify(productDetails));
    return this.httpClient.post<any>(url, productDetails).pipe(
      tap((data) => {
        
      }),
      catchError((err) => this.handleError(err))
    );
  }

  updateProductDetails(productDetails: any): any {
    
    const url = `${this.apiDomain}/Product/UpdateProduct`;
    // this.loggerService.loggerEvent('ProductService',"updateProductDetails", JSON.stringify(productDetails));
    return this.httpClient.put<any>(url, productDetails).pipe(
      tap((data) => {
        
        return data;
      }),
      catchError((err) => this.handleError(err))
    );
  }

  getProductsByCategory(categoryId: number): Observable<any[]> {
    
    const url = `${this.apiDomain}/Product/GetProductByCategoryId/${categoryId}`;
    return this.httpClient.get<any[]>(url).pipe(
      map((data) => {
        
        return data;
      }),
      catchError((err) => this.handleError(err))
    );
  }

  // Get all product details
  getAllProductDetails(): any {
    
    const url = `${this.apiDomain}/Product/GetAllProduct`;
    return this.httpClient.get<any>(url).pipe(
      tap((data) => {
        
        return data;
      }),
      catchError((err) => this.handleError(err))
    );
  }



  // Get product details by product ID
  GetProductById(productId: number): Observable<any> {
    
    const url = `${this.apiDomain}/Product/GetProductById/${productId}`;
    return this.httpClient.get<any>(url).pipe(
      tap((data) => {
        
        return data;
      }),
      catchError((err) => this.handleError(err))
    );
  }

  // Delete a product by product ID
  deleteProduct(product: Product): any {
    if (product) {
   
      const url = `${this.apiDomain}/Product/DeleteProduct/${product.id}`;
      // this.loggerService.loggerEvent('ProductService',"deleteProduct", JSON.stringify(product));
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
      console.log('An error occured:', error.error);
      console.error('An error occured:', error.error);

    }
    else {
      console.log('An error occured:', error.error);
      console.error(`BackEnd returned code ${error.status}, body was: `, error.error);

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
