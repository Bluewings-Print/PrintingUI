import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  product: Product | undefined;
  selectedColor: string = '';
  selectedSize: string = '';

  products: Product[] = [
    // Men's Products
    {
      id: '1',
      name: 'Mens Half-Sleeve T-Shirt',
      price: 24.99,
      imageUrl: 'https://example.com/mens-tshirt1.jpg',
      images: [
        'https://example.com/mens-tshirt1.jpg',
        'https://example.com/mens-tshirt1-back.jpg'
      ],
      fit: 'Regular fit',
      material: '100% Cotton',
      weight: 'Mid weight, 180 GSM',
      colors: [
        { name: 'Green', code: '#556B2F' },
        { name: 'Blue', code: '#000080' }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: '2',
      name: 'Mens Full-Sleeve T-Shirt',
      price: 29.99,
      imageUrl: 'https://example.com/mens-tshirt2.jpg',
      images: [
        'https://example.com/mens-tshirt2.jpg',
        'https://example.com/mens-tshirt2-back.jpg'
      ],
      fit: 'Slim fit',
      material: 'Polyester blend',
      weight: 'Light weight, 150 GSM',
      colors: [
        { name: 'Black', code: '#000000' },
        { name: 'White', code: '#FFFFFF' }
      ],
      sizes: ['M', 'L', 'XL'],
    },
    {
      id: '3',
      name: 'Mens Classic Hoodie',
      price: 49.99,
      imageUrl: 'https://example.com/mens-hoodie1.jpg',
      images: [
        'https://example.com/mens-hoodie1.jpg',
        'https://example.com/mens-hoodie1-back.jpg'
      ],
      fit: 'Relaxed fit',
      material: 'Fleece',
      weight: 'Heavy weight, 300 GSM',
      colors: [
        { name: 'Black', code: '#000000' },
        { name: 'Gray', code: '#808080' }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: '4',
      name: 'Mens Pullover Hoodie',
      price: 59.99,
      imageUrl: 'https://example.com/mens-hoodie2.jpg',
      images: [
        'https://example.com/mens-hoodie2.jpg',
        'https://example.com/mens-hoodie2-back.jpg'
      ],
      fit: 'Regular fit',
      material: 'Cotton and Polyester blend',
      weight: 'Heavy weight, 320 GSM',
      colors: [
        { name: 'Grey', code: '#808080' },
        { name: 'Navy', code: '#000080' }
      ],
      sizes: ['M', 'L', 'XL'],
    },

    // Women's Products
    {
      id: '5',
      name: 'Womens Crop T-Shirt',
      price: 19.99,
      imageUrl: 'https://example.com/womens-tshirt1.jpg',
      images: [
        'https://example.com/womens-tshirt1.jpg',
        'https://example.com/womens-tshirt1-back.jpg'
      ],
      fit: 'Casual fit',
      material: 'Cotton and Polyester blend',
      weight: 'Light weight, 150 GSM',
      colors: [
        { name: 'White', code: '#FFFFFF' },
        { name: 'Pink', code: '#FFC0CB' }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: '6',
      name: 'Womens Relaxed T-Shirt',
      price: 25.99,
      imageUrl: 'https://example.com/womens-tshirt2.jpg',
      images: [
        'https://example.com/womens-tshirt2.jpg',
        'https://example.com/womens-tshirt2-back.jpg'
      ],
      fit: 'Loose fit',
      material: 'Viscose',
      weight: 'Mid weight, 180 GSM',
      colors: [
        { name: 'Yellow', code: '#FFFF00' },
        { name: 'Blue', code: '#0000FF' }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: '7',
      name: 'Womens Cozy Hoodie',
      price: 39.99,
      imageUrl: 'https://example.com/womens-hoodie1.jpg',
      images: [
        'https://example.com/womens-hoodie1.jpg',
        'https://example.com/womens-hoodie1-back.jpg'
      ],
      fit: 'Regular fit',
      material: 'Fleece',
      weight: 'Heavy weight, 300 GSM',
      colors: [
        { name: 'Blue', code: '#0000FF' },
        { name: 'Red', code: '#FF0000' }
      ],
      sizes: ['M', 'L', 'XL'],
    },
    {
      id: '8',
      name: 'Womens Zip-Up Hoodie',
      price: 45.99,
      imageUrl: 'https://example.com/womens-hoodie2.jpg',
      images: [
        'https://example.com/womens-hoodie2.jpg',
        'https://example.com/womens-hoodie2-back.jpg'
      ],
      fit: 'Regular fit',
      material: 'Cotton and Polyester blend',
      weight: 'Heavy weight, 320 GSM',
      colors: [
        { name: 'Red', code: '#FF0000' },
        { name: 'Black', code: '#000000' }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
    },

    // Kids' Products
    {
      id: '9',
      name: 'Kids Graphic T-Shirt',
      price: 14.99,
      imageUrl: 'https://example.com/kids-tshirt1.jpg',
      images: [
        'https://example.com/kids-tshirt1.jpg',
        'https://example.com/kids-tshirt1-back.jpg'
      ],
      fit: 'Loose fit',
      material: '100% Cotton',
      weight: 'Light weight, 150 GSM',
      colors: [
        { name: 'Green', code: '#556B2F' },
        { name: 'Blue', code: '#000080' }
      ],
      sizes: ['XS', 'S', 'M'],
    },
    {
      id: '10',
      name: 'Kids Striped T-Shirt',
      price: 16.99,
      imageUrl: 'https://example.com/kids-tshirt2.jpg',
      images: [
        'https://example.com/kids-tshirt2.jpg',
        'https://example.com/kids-tshirt2-back.jpg'
      ],
      fit: 'Regular fit',
      material: 'Cotton blend',
      weight: 'Light weight, 120 GSM',
      colors: [
        { name: 'Blue', code: '#0000FF' },
        { name: 'Red', code: '#FF0000' }
      ],
      sizes: ['S', 'M', 'L'],
    },
    {
      id: '11',
      name: 'Kids Lightweight Hoodie',
      price: 29.99,
      imageUrl: 'https://example.com/kids-hoodie1.jpg',
      images: [
        'https://example.com/kids-hoodie1.jpg',
        'https://example.com/kids-hoodie1-back.jpg'
      ],
      fit: 'Regular fit',
      material: 'Fleece',
      weight: 'Medium weight, 200 GSM',
      colors: [
        { name: 'Pink', code: '#FFC0CB' },
        { name: 'Grey', code: '#808080' }
      ],
      sizes: ['XS', 'S', 'M', 'L'],
    },
    {
      id: '12',
      name: 'Kids Fleece Hoodie',
      price: 34.99,
      imageUrl: 'https://example.com/kids-hoodie2.jpg',
      images: [
        'https://example.com/kids-hoodie2.jpg',
        'https://example.com/kids-hoodie2-back.jpg'
      ],
      fit: 'Regular fit',
      material: 'Fleece',
      weight: 'Heavy weight, 300 GSM',
      colors: [
        { name: 'Black', code: '#000000' },
        { name: 'Green', code: '#556B2F' }
      ],
      sizes: ['M', 'L'],
    },
    // Men's Polos
    {
      id: '13',
      name: 'Mens Classic Polo',
      price: 39.99,
      imageUrl: 'https://example.com/mens-polo1.jpg',
      images: [
        'https://example.com/mens-polo1.jpg',
        'https://example.com/mens-polo1-back.jpg'
      ],
      fit: 'Classic fit',
      material: 'Cotton',
      weight: 'Mid weight, 200 GSM',
      colors: [
        { name: 'Navy', code: '#000080' },
        { name: 'White', code: '#FFFFFF' }
      ],
      sizes: ['M', 'L', 'XL'],
    },
    {
      id: '14',
      name: 'Mens Slim Fit Polo',
      price: 42.99,
      imageUrl: 'https://example.com/mens-polo2.jpg',
      images: [
        'https://example.com/mens-polo2.jpg',
        'https://example.com/mens-polo2-back.jpg'
      ],
      fit: 'Slim fit',
      material: 'Polyester blend',
      weight: 'Light weight, 180 GSM',
      colors: [
        { name: 'Grey', code: '#808080' },
        { name: 'Blue', code: '#0000FF' }
      ],
      sizes: ['S', 'M', 'L'],
    },

    // Women's Polos
    {
      id: '15',
      name: 'Womens Short Sleeve Polo',
      price: 34.99,
      imageUrl: 'https://example.com/womens-polo1.jpg',
      images: [
        'https://example.com/womens-polo1.jpg',
        'https://example.com/womens-polo1-back.jpg'
      ],
      fit: 'Regular fit',
      material: 'Cotton blend',
      weight: 'Light weight, 160 GSM',
      colors: [
        { name: 'White', code: '#FFFFFF' },
        { name: 'Beige', code: '#F5F5DC' }
      ],
      sizes: ['S', 'M', 'L'],
    },
    {
      id: '16',
      name: 'Womens Casual Polo',
      price: 36.99,
      imageUrl: 'https://example.com/womens-polo2.jpg',
      images: [
        'https://example.com/womens-polo2.jpg',
        'https://example.com/womens-polo2-back.jpg'
      ],
      fit: 'Loose fit',
      material: 'Viscose',
      weight: 'Mid weight, 200 GSM',
      colors: [
        { name: 'Black', code: '#000000' },
        { name: 'Red', code: '#FF0000' }
      ],
      sizes: ['S', 'M', 'L'],
    },

    // Kids' Polos
    {
      id: '17',
      name: 'Kids Polo Shirt',
      price: 18.99,
      imageUrl: 'https://example.com/kids-polo1.jpg',
      images: [
        'https://example.com/kids-polo1.jpg',
        'https://example.com/kids-polo1-back.jpg'
      ],
      fit: 'Relaxed fit',
      material: '100% Cotton',
      weight: 'Light weight, 150 GSM',
      colors: [
        { name: 'Blue', code: '#0000FF' },
        { name: 'Yellow', code: '#FFFF00' }
      ],
      sizes: ['XS', 'S', 'M'],
    },
    {
      id: '18',
      name: 'Kids Cotton Polo',
      price: 21.99,
      imageUrl: 'https://example.com/kids-polo2.jpg',
      images: [
        'https://example.com/kids-polo2.jpg',
        'https://example.com/kids-polo2-back.jpg'
      ],
      fit: 'Classic fit',
      material: 'Cotton',
      weight: 'Mid weight, 180 GSM',
      colors: [
        { name: 'Green', code: '#008000' },
        { name: 'Pink', code: '#FFC0CB' }
      ],
      sizes: ['S', 'M'],
    },

    // Men's Caps
    {
      id: '19',
      name: 'Mens Snapback Cap',
      price: 15.99,
      imageUrl: 'https://example.com/mens-cap1.jpg',
      images: [
        'https://example.com/mens-cap1.jpg',
        'https://example.com/mens-cap1-side.jpg'
      ],
      fit: 'One Size',
      material: 'Polyester',
      weight: 'Light weight',
      colors: [
        { name: 'Black', code: '#000000' },
        { name: 'Grey', code: '#808080' }
      ],
      sizes: ['One Size'],
    },
    {
      id: '20',
      name: 'Mens Trucker Cap',
      price: 17.99,
      imageUrl: 'https://example.com/mens-cap2.jpg',
      images: [
        'https://example.com/mens-cap2.jpg',
        'https://example.com/mens-cap2-side.jpg'
      ],
      fit: 'One Size',
      material: 'Cotton and Mesh',
      weight: 'Light weight',
      colors: [
        { name: 'Red', code: '#FF0000' },
        { name: 'Blue', code: '#0000FF' }
      ],
      sizes: ['One Size'],
    },

    // Women's Caps
    {
      id: '21',
      name: 'Womens Baseball Cap',
      price: 14.99,
      imageUrl: 'https://example.com/womens-cap1.jpg',
      images: [
        'https://example.com/womens-cap1.jpg',
        'https://example.com/womens-cap1-side.jpg'
      ],
      fit: 'One Size',
      material: 'Polyester',
      weight: 'Light weight',
      colors: [
        { name: 'White', code: '#FFFFFF' },
        { name: 'Pink', code: '#FFC0CB' }
      ],
      sizes: ['One Size'],
    },
    {
      id: '22',
      name: 'Womens Sun Hat',
      price: 19.99,
      imageUrl: 'https://example.com/womens-cap2.jpg',
      images: [
        'https://example.com/womens-cap2.jpg',
        'https://example.com/womens-cap2-side.jpg'
      ],
      fit: 'One Size',
      material: 'Cotton',
      weight: 'Light weight',
      colors: [
        { name: 'Beige', code: '#F5F5DC' },
        { name: 'Brown', code: '#A52A2A' }
      ],
      sizes: ['One Size'],
    },

    // Kids' Caps
    {
      id: '23',
      name: 'Kids Adventure Cap',
      price: 9.99,
      imageUrl: 'https://example.com/kids-cap1.jpg',
      images: [
        'https://example.com/kids-cap1.jpg',
        'https://example.com/kids-cap1-side.jpg'
      ],
      fit: 'One Size',
      material: 'Polyester',
      weight: 'Light weight',
      colors: [
        { name: 'Green', code: '#008000' },
        { name: 'Blue', code: '#0000FF' }
      ],
      sizes: ['One Size'],
    },
    {
      id: '24',
      name: 'Kids Snapback Cap',
      price: 12.99,
      imageUrl: 'https://example.com/kids-cap2.jpg',
      images: [
        'https://example.com/kids-cap2.jpg',
        'https://example.com/kids-cap2-side.jpg'
      ],
      fit: 'One Size',
      material: 'Cotton blend',
      weight: 'Light weight',
      colors: [
        { name: 'Blue', code: '#0000FF' },
        { name: 'Red', code: '#FF0000' }
      ],
      sizes: ['One Size'],
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.loadProduct(productId);
  }

  loadProduct(productId: string | null): void {
    if (productId) {
      this.product = this.products.find((p) => p.id === productId);

      if (this.product) {
        this.selectedColor = this.product.colors[0].code;
      } else {
        console.error('Product not found');
      }
    }
  }

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
    if (this.product) {
      this.product.imageUrl = imageUrl;
    }
  }

  selectColor(colorCode: string): void {
    this.selectedColor = colorCode;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  orderNow(): void {
    // Navigate to DetailQuotesComponent with product id and name as query parameters
    this.router.navigate(['/quote/detailQuote']);
  }
}
