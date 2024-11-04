import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService/product.service';
import { Product } from '../productModel/product.model';

// interface Product {
//   name: string;
//   price: number;
//   color: string;
//   category: string;
//   size: string;
//   brand: string;
// }
@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  // products: Product[] = [];
  // filterSections: { [key: string]: boolean } = {};
  // selectedSize: string = 'M';
  searchText: string = "";
  showCategory: boolean = true;
  showSize: boolean = true;
  showColor: boolean = true;
  showBrand: boolean = true;
  showPrice: boolean = true;

  categories = ['T-Shirts', 'Hoodies', 'Polos', 'Caps'];
  sizes = ['S', 'M', 'L', 'XL'];
  colors = ['Red', 'Blue', 'Green', 'Yellow'];
  brands = ['Nike', 'Adidas', 'Puma', 'Reebok'];
  prices = ['Under $20', '$20-$50', '$50-$100', 'Above $100'];

  products: Product[] = [
    {id:123, name: 'White Printed T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike' },
    {id:123, name: 'White Printed T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike' },
    {id:123, name: 'White Printed T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike' },
    {id:123, name: 'White Printed T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike' },
    {id:123, name: 'White Printed T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike' },
    {id:123, name: 'White Printed T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike' },
    {id:123, name: 'White Printed T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike' },
    {id:123, name: 'White Printed T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike' },

    {id:123, name: 'White Printed T-Shirt', price: 24.99, color: 'green', category: 'T-Shirts', size: 'M', brand: 'Nike' },
  ];

  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.filteredProducts = this.products;
    // this.products = this.productService.getProducts();
    // // Initialize all filter sections as expanded
    // document.querySelectorAll('.filter-section').forEach((section) => {
    //   const title = section.querySelector('.filter-title')?.textContent || '';
    //   this.filterSections[title] = true;
    // });
  }

  // toggleFilterSection(sectionName: string): void {
  //   this.filterSections[sectionName] = !this.filterSections[sectionName];
  // }

  // selectSize(size: string): void {
  //   this.selectedSize = size;
  // }

  // isFilterExpanded(sectionName: string): boolean {
  //   return this.filterSections[sectionName];
  // }

  // getToggleIcon(sectionName: string): string {
  //   return this.filterSections[sectionName] ? '−' : '+';
  // }
  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
  toggleFilter(type: string): void {
    switch(type) {
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
//alternate approach
// filterStates = {
//   category: true,
//   size: true,
//   color: true,
//   brand: true,
//   price: true,
// };

// toggleFilter(type: string): void {
//   this.filterStates[type] = !this.filterStates[type];
// }  

  filterByCategory(category: string): void {
    this.filteredProducts = this.products.filter(product => product.category === category);
  }

  filterBySize(size: string): void {
    this.filteredProducts = this.products.filter(product => product.size === size);
  }

  filterByColor(color: string): void {
    this.filteredProducts = this.products.filter(product => product.color === color);
  }

  filterByBrand(brand: string): void {
    this.filteredProducts = this.products.filter(product => product.brand === brand);
  }

  filterByPrice(price: string): void {
    // Implement price filter logic here
  }

  customizeProduct(product: Product): void {
    // Implement customization logic
  }
}
