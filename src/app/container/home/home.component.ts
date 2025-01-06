import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  constructor(private router: Router) {}
  currentSlide = 0;
  autoSlideInterval: any;

  services = [
    {
      img: 'assets/public/customEmbroidery.png',
      alt: 'Custom embroidery',
      title: 'Custom embroidery'
    },
    {
      img: 'assets/public/vinyl-transfer.jpg',
      alt: 'Custom Printing',
      title: 'Custom Printing'
    },
    {
      img: 'assets/public/supacolor.jpg',
      alt: 'Custom Merchandise Printing',
      title: 'Custom Merchandise Printing'
    },
    {
      img: 'assets/public/embroidery (1).jpg',
      alt: 'Company Branding',
      title: 'Company Branding'
    },
  ];
  selectProduct(garmentType: string) {
    this.router.navigate(['/quote/quickQuote'], { queryParams: { garmentType } });
  }
  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.moveSlide(1); // Move to the next slide every 3 seconds
    }, 3000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  moveSlide(direction: number) {
    const totalSlides = this.services.length;
    this.currentSlide = (this.currentSlide + direction + totalSlides) % totalSlides;
  }
}
