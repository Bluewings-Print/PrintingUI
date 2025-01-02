import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('0.8s ease-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ReadMoreComponent implements OnInit{
  services = [
    {
      title: 'Custom Embroidery',
      description: 'Professional embroidery services for business attire, sports uniforms, and promotional merchandise. Our state-of-the-art machines ensure precise and durable designs.',
      features: ['High-quality thread options', 'Complex design capability', 'Bulk order handling', 'Color matching'],
      image: 'assets/public/embroidery.jpg'
    },
    {
      title: 'Custom Printing',
      description: 'Advanced digital and screen printing solutions for all your custom apparel needs. We use premium inks and materials for vibrant, long-lasting results.',
      features: ['Digital direct-to-garment', 'Screen printing', 'Vinyl heat transfer', 'Full color capability'],
      image: 'assets/public/printing.jpg'
    },
    {
      title: 'Company Branding',
      description: 'Complete branding solutions to help your business stand out. From logo design to consistent brand implementation across all merchandise.',
      features: ['Logo design services', 'Brand consistency', 'Corporate merchandise', 'Uniform programs'],
      image: 'assets/public/branding.jpg'
    },
    {
      title: 'Custom Merchandise Printing',
      description: 'Create personalized merchandise with your unique designs, perfect for businesses, events, or personal use. We ensure premium quality and on-time delivery.',
      features: ['Custom mugs and bottles', 'Bags and backpacks', 'Caps and hats', 'Promotional items'],
      image: 'assets/public/merchandise.jpg'
    },
    {
      title: 'Custom Quoted T-Shirts',
      description: 'Get custom t-shirts with your favorite quotes, slogans, or designs. Perfect for personal use, gifts, or promotional campaigns.',
      features: ['Quote-based designs', 'Wide variety of t-shirt styles', 'Eco-friendly printing options', 'Bulk discounts available'],
      image: 'assets/public/quoted.jpg'
    },
    {
      title: 'Additional Services',
      description: 'Explore our additional services to enhance your custom apparel and merchandise experience.',
      features: ['Design consultation', 'Rush order processing', 'Special event merchandise', 'Custom packaging solutions'],
      image: 'assets/public/additional.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
