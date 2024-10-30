import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    // Initialize GSAP animations
    gsap.to(this.elRef.nativeElement.querySelector('.header'), {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.to(this.elRef.nativeElement.querySelectorAll('.faq-item'), {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });

    gsap.to(this.elRef.nativeElement.querySelector('.contact-section'), {
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: 'power3.out',
    });

    // FAQ Toggle functionality
    this.elRef.nativeElement.querySelectorAll('.faq-question').forEach((question: HTMLElement) => {
      this.renderer.listen(question, 'click', () => this.toggleFaq(question));
    });
  }

  private toggleFaq(question: HTMLElement): void {
    const faqItem = question.parentElement;
    if (!faqItem) return;

    const isActive = faqItem.classList.contains('active');

    // Close all FAQ items
    this.elRef.nativeElement.querySelectorAll('.faq-item').forEach((item: HTMLElement) => {
      this.renderer.removeClass(item, 'active');
    });

    // If the clicked item wasn't active, open it
    if (!isActive) {
      this.renderer.addClass(faqItem, 'active');
    }
  }
}
