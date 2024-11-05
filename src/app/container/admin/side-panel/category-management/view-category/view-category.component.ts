import { Component, OnInit } from '@angular/core';

interface Category {
  id: number;
  name: string;
  description: string;
  productsCount: number;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit{
  categories: Category[] = [];
  searchTerm: string = '';
  showAddModal: boolean = false;
  showEditModal: boolean = false;
  showDeleteModal: boolean = false;
  selectedCategory: Category | null = null;
  
  newCategory = {
    name: '',
    description: ''
  };

  constructor() {}

  ngOnInit() {
    // Mock data - replace with actual API call
    this.categories = [
      {
        id: 1,
        name: 'Electronics',
        description: 'Electronic gadgets and devices',
        productsCount: 150,
        status: 'active',
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15')
      },
      {
        id: 2,
        name: 'Clothing',
        description: 'Fashion and apparel',
        productsCount: 300,
        status: 'active',
        createdAt: new Date('2024-01-20'),
        updatedAt: new Date('2024-01-20')
      }
    ];
  }

  // Modal Controls
  openAddModal() {
    this.showAddModal = true;
    this.newCategory = { name: '', description: '' };
  }

  openEditModal(category: Category) {
    this.selectedCategory = { ...category };
    this.showEditModal = true;
  }

  openDeleteModal(category: Category) {
    this.selectedCategory = category;
    this.showDeleteModal = true;
  }

  closeModals() {
    this.showAddModal = false;
    this.showEditModal = false;
    this.showDeleteModal = false;
    this.selectedCategory = null;
    this.newCategory = { name: '', description: '' };
  }

  // CRUD Operations
  addCategory() {
    if (this.newCategory.name && this.newCategory.description) {
      const category: Category = {
        id: this.categories.length + 1,
        name: this.newCategory.name,
        description: this.newCategory.description,
        productsCount: 0,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.categories.unshift(category);
      this.closeModals();
    }
  }

  updateCategory() {
    if (this.selectedCategory) {
      const index = this.categories.findIndex(c => c.id === this.selectedCategory!.id);
      if (index !== -1) {
        this.selectedCategory.updatedAt = new Date();
        this.categories[index] = { ...this.selectedCategory };
        this.closeModals();
      }
    }
  }

  deleteCategory() {
    if (this.selectedCategory) {
      this.categories = this.categories.filter(c => c.id !== this.selectedCategory!.id);
      this.closeModals();
    }
  }

  toggleStatus(category: Category) {
    category.status = category.status === 'active' ? 'inactive' : 'active';
    category.updatedAt = new Date();
  }

  get filteredCategories() {
    return this.categories.filter(category =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
