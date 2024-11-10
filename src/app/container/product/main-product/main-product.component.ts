import { Component, OnInit } from '@angular/core';

import { Product } from '../productModel/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  searchText: string = "";
  showCategory: boolean = true;
  showSize: boolean = true;
  showColor: boolean = true;
  showBrand: boolean = true;
  showPrice: boolean = true;

  categories = ['T-Shirts', 'Hoodies', 'Polos', 'Caps'];
  sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  colors = ['Red', 'Blue', 'Green', 'Yellow', 'White', 'Black', 'Grey', 'Brown', 'Pink', 'Navy', 'Beige'];
                                                brands = ['Anvil', 'AS Colour', 'Biz Collection', 'Gildan', 'Ramo'];
  prices = ['Under $20', '$20-$50', '$50-$100', 'Above $100'];


  
  products: Product[] = [
    // Men's Products
    { id: 1, name: 'Mens Half-Sleeve T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'AS Colour', imageUrl: 'assets/public/pro1a.jpg' },
    { id: 2, name: 'Mens Full-Sleeve T-Shirt', price: 29.99, color: 'blue', category: 'T-Shirts', size: 'L', brand: 'Gildan', imageUrl: 'assets/public/pro2a.jpg' },
    { id: 3, name: 'Mens Classic Hoodie', price: 49.99, color: 'black', category: 'Hoodies', size: 'XL', brand: 'Anvil', imageUrl: 'assets/public/pro3a.jpg' },
    { id: 4, name: 'Mens Pullover Hoodie', price: 59.99, color: 'grey', category: 'Hoodies', size: 'M', brand: 'Ramo', imageUrl: 'assets/public/pro4a.jpg' },

    // Women's Products
    { id: 5, name: 'Womens Crop T-Shirt', price: 19.99, color: 'white', category: 'T-Shirts', size: 'S', brand: 'Biz Collection', imageUrl: 'assets/public/pro5b.jpg' },
    { id: 6, name: 'Womens Relaxed T-Shirt', price: 25.99, color: 'yellow', category: 'T-Shirts', size: 'M', brand: 'AS Colour', imageUrl: 'assets/public/pro6a.jpg' },
    { id: 7, name: 'Womens Cozy Hoodie', price: 39.99, color: 'blue', category: 'Hoodies', size: 'L', brand: 'Gildan', imageUrl: 'assets/public/pro7a.jpg' },
    { id: 8, name: 'Womens Zip-Up Hoodie', price: 45.99, color: 'red', category: 'Hoodies', size: 'S', brand: 'Ramo', imageUrl: 'assets/public/pro8a.jpg' },

    // Kids' Products
    { id: 9, name: 'Kids Graphic T-Shirt', price: 14.99, color: 'green', category: 'T-Shirts', size: 'S', brand: 'Gildan', imageUrl: 'assets/public/pro9a.jpg' },
    { id: 10, name: 'Kids Striped T-Shirt', price: 16.99, color: 'blue', category: 'T-Shirts', size: 'M', brand: 'Anvil', imageUrl: 'assets/public/pro10a.jpg' },
    { id: 11, name: 'Kids Lightweight Hoodie', price: 29.99, color: 'pink', category: 'Hoodies', size: 'L', brand: 'AS Colour', imageUrl: 'assets/public/pro11a.jpg' },
    { id: 12, name: 'Kids Fleece Hoodie', price: 34.99, color: 'black', category: 'Hoodies', size: 'M', brand: 'Biz Collection', imageUrl: 'assets/public/pro12a.jpg' },

    // Men's Polos
    { id: 13, name: 'Mens Classic Polo', price: 39.99, color: 'navy', category: 'Polos', size: 'L', brand: 'Ralph Lauren', imageUrl: 'assets/public/pro13a.jpg' },
    { id: 14, name: 'Mens Slim Fit Polo', price: 42.99, color: 'grey', category: 'Polos', size: 'M', brand: 'Biz Collection', imageUrl: 'assets/public/pro14a.jpg' },

    // Women's Polos
    { id: 15, name: 'Womens Short Sleeve Polo', price: 34.99, color: 'white', category: 'Polos', size: 'S', brand: 'Ramo', imageUrl: 'assets/public/pro15a.jpg' },
    { id: 16, name: 'Womens Casual Polo', price: 36.99, color: 'black', category: 'Polos', size: 'M', brand: 'Biz Collection', imageUrl: 'assets/public/pro16a.jpg' },

    // Kids' Polos
    { id: 17, name: 'Kids Polo Shirt', price: 18.99, color: 'blue', category: 'Polos', size: 'S', brand: 'Gildan', imageUrl: 'assets/public/pro17a.jpg' },
    { id: 18, name: 'Kids Cotton Polo', price: 21.99, color: 'green', category: 'Polos', size: 'M', brand: 'Biz Collection', imageUrl: 'assets/public/pro18a.jpg' },

    // Men's Caps
    { id: 19, name: 'Mens Snapback Cap', price: 15.99, color: 'black', category: 'Caps', size: 'One Size', brand: 'Ramo', imageUrl: 'assets/public/pro19a.jpg' },
    { id: 20, name: 'Mens Trucker Cap', price: 17.99, color: 'red', category: 'Caps', size: 'One Size', brand: 'Anvil', imageUrl: 'assets/public/pro20a.jpg' },

    // Women's Caps
    { id: 21, name: 'Womens Baseball Cap', price: 14.99, color: 'white', category: 'Caps', size: 'One Size', brand: 'Biz Collection', imageUrl: 'assets/public/pro21a.jpg' },
    { id: 22, name: 'Womens Sun Hat', price: 19.99, color: 'beige', category: 'Caps', size: 'One Size', brand: 'AS Colour', imageUrl: 'assets/public/pro22a.png' },

    // Kids' Caps
    { id: 23, name: 'Kids Adventure Cap', price: 9.99, color: 'green', category: 'Caps', size: 'One Size', brand: 'Ramo', imageUrl: 'assets/public/pro23a.jpg' },
    { id: 24, name: 'Kids Snapback Cap', price: 12.99, color: 'blue', category: 'Caps', size: 'One Size', brand: 'Biz Collection', imageUrl: 'assets/public/pro24a.jpg' },
  ];

  filteredProducts: Product[] = [];
  activeFilters: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  toggleFilter(type: string): void {
    switch (type) {
      case 'category':
        this.showCategory = !this.showCategory;
        break;
      case 'size':
        this.showSize = !this.showSize;
        break;
      case 'color':
        this.showColor = !this.showColor;
        break;
      case 'brand':
        this.showBrand = !this.showBrand;
        break;
      case 'price':
        this.showPrice = !this.showPrice;
        break;
    }
  }

  filterByCategory(category: string): void {
    this.filteredProducts = this.products.filter(product => product.category === category);
    this.addActiveFilter('Category: ' + category);
  }

  filterBySize(size: string): void {
    this.filteredProducts = this.products.filter(product => product.size === size);
    this.addActiveFilter('Size: ' + size);
  }

  filterByColor(color: string): void {
    this.filteredProducts = this.products.filter(product => product.color === color);
    this.addActiveFilter('Color: ' + color);
  }

  filterByBrand(brand: string): void {
    this.filteredProducts = this.products.filter(product => product.brand === brand);
    this.addActiveFilter('Brand: ' + brand);
  }

  filterByPrice(price: string): void {
    // Implement price filter logic here
    this.addActiveFilter('Price: ' + price);
  }

  addActiveFilter(filter: string): void {
    if (!this.activeFilters.includes(filter)) {
      this.activeFilters.push(filter);
    }
  }

  removeFilter(filter: string): void {
    this.activeFilters = this.activeFilters.filter(f => f !== filter);
    this.applyFilters();
  }

  clearAllFilters(): void {
    this.activeFilters = [];
    this.filteredProducts = this.products;
  }

  applyFilters(): void {
    // Apply active filters to the product list (this will require your own filtering logic)
  }

  viewDetail(product: Product): void {
    this.router.navigate(['/products/detailedProduct', product.id]);
  }
}
