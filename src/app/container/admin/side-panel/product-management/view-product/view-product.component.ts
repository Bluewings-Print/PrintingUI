import { trigger, transition, style, animate } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
}

interface Category {
  id: string;
  name: string;
}

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'], 
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None // Disables encapsulation
})
export class ViewProductComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  productForm: FormGroup;
  searchTerm: string = '';
  selectedCategory: string = '';
  showModal: boolean = false;
  showDeleteModal: boolean = false;
  isEditing: boolean = false;
  selectedProduct: Product | null = null;
  public imagePreview: string | ArrayBuffer | null = null; // To store the preview of the selected image

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: [''],
      price: ['', Validators.required],
      stock: [''],
      description: [''],
      image: [null] // Change this to hold the file input
    });
  }

  ngOnInit() {
    // Mock data - replace with actual API calls
    this.categories = [
      { id: '1', name: 'Electronics' },
      { id: '2', name: 'Clothing' },
      { id: '3', name: 'Books' },
      { id: '4', name: 'Home & Garden' }
    ];

    // Mock products - replace with API call
    this.products = [
      {
        id: 1,
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: 99.99,
        stock: 15,
        description: 'High-quality wireless headphones with noise cancellation',
        imageUrl: '/api/placeholder/400/320'
      },
      // Add more mock products as needed
    ];

    this.filterProducts();
  }

  createProductForm(): FormGroup {
    return this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  openAddModal(): void {
    this.isEditing = false;
    this.productForm.reset();
    this.showModal = true;
  }

  openEditModal(product: Product): void {
    this.isEditing = true;
    this.selectedProduct = product;
    this.productForm.patchValue(product);
    this.showModal = true;
  }

  openDeleteModal(product: Product): void {
    this.selectedProduct = product;
    this.showDeleteModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.productForm.reset();
    this.selectedProduct = null;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedProduct = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.productForm.patchValue({ image: file }); // Add the file to the form
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Set the image preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }

  submitForm(): void {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      
      if (this.isEditing && this.selectedProduct) {
        // Update existing product
        const index = this.products.findIndex(p => p.id === this.selectedProduct!.id);
        if (index !== -1) {
          this.products[index] = {
            ...this.selectedProduct,
            ...productData
          };
          this.showToast('Product updated successfully');
        }
      } else {
        // Add new product
        const newProduct: Product = {
          ...productData,
          id: this.generateUniqueId()
        };
        this.products.push(newProduct);
        this.showToast('Product added successfully');
      }

      this.filterProducts();
      this.closeModal();
    }
  }

  confirmDelete(): void {
    if (this.selectedProduct) {
      const index = this.products.findIndex(p => p.id === this.selectedProduct!.id);
      if (index !== -1) {
        this.products.splice(index, 1);
        this.filterProducts();
        this.showToast('Product deleted successfully');
      }
      this.closeDeleteModal();
    }
  }

  private generateUniqueId(): number {
    // Simple ID generation - replace with proper UUID in production
    return Math.max(0, ...this.products.map(p => p.id)) + 1;
  }

  private showToast(message: string): void {
    // Implement your toast notification logic here
    console.log(message);
  }

  // Helper methods for form validation
  isFieldInvalid(fieldName: string): boolean {
    const field = this.productForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getErrorMessage(fieldName: string): string {
    const field = this.productForm.get(fieldName);
    if (!field) return '';

    if (field.errors) {
      if (field.errors['required']) return 'This field is required';
      if (field.errors['minlength']) return 'Input is too short';
      if (field.errors['min']) return 'Value must be greater than 0';
    }
    return '';
  }
}
