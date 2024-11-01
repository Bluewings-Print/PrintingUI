import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService/product.service';
import { Product } from '../productModel/product.model';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  products: Product[] = [];
  filterSections: { [key: string]: boolean } = {};
  selectedSize: string = 'M';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    // Initialize all filter sections as expanded
    document.querySelectorAll('.filter-section').forEach((section) => {
      const title = section.querySelector('.filter-title')?.textContent || '';
      this.filterSections[title] = true;
    });
  }

  toggleFilterSection(sectionName: string): void {
    this.filterSections[sectionName] = !this.filterSections[sectionName];
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  isFilterExpanded(sectionName: string): boolean {
    return this.filterSections[sectionName];
  }

  getToggleIcon(sectionName: string): string {
    return this.filterSections[sectionName] ? '−' : '+';
  }
}
