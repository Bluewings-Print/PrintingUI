import { Component,ElementRef,Renderer2,ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('navLinks') navLinks!: ElementRef;
  @ViewChild('burgerIcon') burgerIcon!: ElementRef;
  @ViewChild('closeIcon') closeIcon!: ElementRef;
  showShadow: boolean = false;
  activeTab: string = 'screen';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  showMenu(): void {
    this.renderer.addClass(this.navLinks.nativeElement, 'show');
  }

  hideMenu(): void {
    this.renderer.removeClass(this.navLinks.nativeElement, 'show');
  }

  onScroll(): void {
    this.showShadow = window.scrollY > 0;
  }


}
