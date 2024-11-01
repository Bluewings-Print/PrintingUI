import { Injectable } from '@angular/core';
import { Product } from '../productModel/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Product[] = [
    { id: 1, name: "White Printed T-Shirt", price: 24.99, color: "#10b981" },
    { id: 2, name: "Graphic Print T-Shirt", price: 29.99, color: "#ec4899" },
    { id: 3, name: "Black Graphic Tee", price: 27.99, color: "#3b82f6" },
    { id: 4, name: "Casual T-Shirt", price: 22.99, color: "#f97316" },
    { id: 5, name: "Urban Style Tee", price: 25.99, color: "#3b82f6" },
    { id: 6, name: "Designer T-Shirt", price: 34.99, color: "#a855f7" },
    { id: 7, name: "Red Hoodie", price: 49.99, color: "#f97316" },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
