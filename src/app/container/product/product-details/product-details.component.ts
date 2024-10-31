import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  images: string[];
  fit: string;
  material: string;
  weight: string;
  colors: Array<{ name: string; code: string }>;
  sizes: string[];
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  @ViewChild('productImage') productImage!: ElementRef;

  product: Product = {
    id: '1',
    name: 'Mens Staple T-Shirt',
    price: 29.99,
    imageUrl: 'assets/public/redHoodie.png',
    images: [
      'assets/public/redHoodie.png',
      'assets/tshirt-olive-back.jpg',
      'assets/tshirt-olive-detail.jpg',
    ],
    fit: 'Regular fit',
    material: '100% combed cotton (marles 15% viscose)',
    weight: 'Mid weight, 180 GSM',
    colors: [
      { name: 'Olive', code: '#556B2F' },
      { name: 'Black', code: '#000000' },
      { name: 'Navy', code: '#000080' },
      { name: 'Gray', code: '#808080' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
  };

  selectedColor: string = this.product.colors[0].code;
  selectedSize: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleZoom(event: MouseEvent): void {
    const image = this.productImage.nativeElement as HTMLImageElement;
    const container = this.imageContainer.nativeElement as HTMLDivElement;

    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    image.style.transform = 'scale(2)';
  }

  resetZoom(): void {
    const image = this.productImage.nativeElement as HTMLImageElement;
    image.style.transform = 'scale(1)';
  }

  changeImage(imageUrl: string): void {
    this.product.imageUrl = imageUrl;
  }

  selectColor(colorCode: string): void {
    this.selectedColor = colorCode;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  addToCart(): void {
    if (!this.selectedSize) {
      alert('Please select a size');
      return;
    }

    // Implement cart functionality
    console.log('Added to cart:', {
      product: this.product.name,
      color: this.selectedColor,
      size: this.selectedSize,
    });
  }
}
