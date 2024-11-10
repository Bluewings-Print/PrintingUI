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
    { id: 1, name: 'Mens Half-Sleeve T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike', imageUrl: 'https://example.com/mens-tshirt1.jpg' },
    { id: 2, name: 'Mens Full-Sleeve T-Shirt', price: 29.99, color: 'blue', category: 'T-Shirts', size: 'L', brand: 'Adidas', imageUrl: 'https://example.com/mens-tshirt2.jpg' },
    { id: 3, name: 'Mens Classic Hoodie', price: 49.99, color: 'black', category: 'Hoodies', size: 'XL', brand: 'Puma', imageUrl: 'https://example.com/mens-hoodie1.jpg' },
    { id: 4, name: 'Mens Pullover Hoodie', price: 59.99, color: 'grey', category: 'Hoodies', size: 'M', brand: 'Champion', imageUrl: 'https://example.com/mens-hoodie2.jpg' },

    // Women's Products
    { id: 5, name: 'Womens Crop T-Shirt', price: 19.99, color: 'white', category: 'T-Shirts', size: 'S', brand: 'Nike', imageUrl: 'https://example.com/womens-tshirt1.jpg' },
    { id: 6, name: 'Womens Relaxed T-Shirt', price: 25.99, color: 'yellow', category: 'T-Shirts', size: 'M', brand: 'Adidas', imageUrl: 'https://example.com/womens-tshirt2.jpg' },
    { id: 7, name: 'Womens Cozy Hoodie', price: 39.99, color: 'blue', category: 'Hoodies', size: 'L', brand: 'Puma', imageUrl: 'https://example.com/womens-hoodie1.jpg' },
    { id: 8, name: 'Womens Zip-Up Hoodie', price: 45.99, color: 'red', category: 'Hoodies', size: 'S', brand: 'Champion', imageUrl: 'https://example.com/womens-hoodie2.jpg' },

    // Kids' Products
    { id: 9, name: 'Kids Graphic T-Shirt', price: 14.99, color: 'green', category: 'T-Shirts', size: 'S', brand: 'Gildan', imageUrl: 'https://example.com/kids-tshirt1.jpg' },
    { id: 10, name: 'Kids Striped T-Shirt', price: 16.99, color: 'blue', category: 'T-Shirts', size: 'M', brand: 'Anvil', imageUrl: 'https://example.com/kids-tshirt2.jpg' },
    { id: 11, name: 'Kids Lightweight Hoodie', price: 29.99, color: 'pink', category: 'Hoodies', size: 'L', brand: 'Hanes', imageUrl: 'https://example.com/kids-hoodie1.jpg' },
    { id: 12, name: 'Kids Fleece Hoodie', price: 34.99, color: 'black', category: 'Hoodies', size: 'M', brand: 'Fruit of the Loom', imageUrl: 'https://example.com/kids-hoodie2.jpg' },

    // Men's Polos
    { id: 13, name: 'Mens Classic Polo', price: 39.99, color: 'navy', category: 'Polos', size: 'L', brand: 'Ralph Lauren', imageUrl: 'https://example.com/mens-polo1.jpg' },
    { id: 14, name: 'Mens Slim Fit Polo', price: 42.99, color: 'grey', category: 'Polos', size: 'M', brand: 'Lacoste', imageUrl: 'https://example.com/mens-polo2.jpg' },

    // Women's Polos
    { id: 15, name: 'Womens Short Sleeve Polo', price: 34.99, color: 'white', category: 'Polos', size: 'S', brand: 'Lacoste', imageUrl: 'https://example.com/womens-polo1.jpg' },
    { id: 16, name: 'Womens Casual Polo', price: 36.99, color: 'black', category: 'Polos', size: 'M', brand: 'Tommy Hilfiger', imageUrl: 'https://example.com/womens-polo2.jpg' },

    // Kids' Polos
    { id: 17, name: 'Kids Polo Shirt', price: 18.99, color: 'blue', category: 'Polos', size: 'S', brand: 'Gildan', imageUrl: 'https://example.com/kids-polo1.jpg' },
    { id: 18, name: 'Kids Cotton Polo', price: 21.99, color: 'green', category: 'Polos', size: 'M', brand: 'Hanes', imageUrl: 'https://example.com/kids-polo2.jpg' },

    // Men's Caps
    { id: 19, name: 'Mens Snapback Cap', price: 15.99, color: 'black', category: 'Caps', size: 'One Size', brand: 'New Era', imageUrl: 'https://example.com/mens-cap1.jpg' },
    { id: 20, name: 'Mens Trucker Cap', price: 17.99, color: 'red', category: 'Caps', size: 'One Size', brand: 'Patagonia', imageUrl: 'https://example.com/mens-cap2.jpg' },

    // Women's Caps
    { id: 21, name: 'Womens Baseball Cap', price: 14.99, color: 'white', category: 'Caps', size: 'One Size', brand: 'Nike', imageUrl: 'https://example.com/womens-cap1.jpg' },
    { id: 22, name: 'Womens Sun Hat', price: 19.99, color: 'beige', category: 'Caps', size: 'One Size', brand: 'Adidas', imageUrl: 'https://example.com/womens-cap2.jpg' },

    // Kids' Caps
    { id: 23, name: 'Kids Adventure Cap', price: 9.99, color: 'green', category: 'Caps', size: 'One Size', brand: 'The North Face', imageUrl: 'https://example.com/kids-cap1.jpg' },
    { id: 24, name: 'Kids Snapback Cap', price: 12.99, color: 'blue', category: 'Caps', size: 'One Size', brand: 'Champion', imageUrl: 'https://example.com/kids-cap2.jpg' },
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
