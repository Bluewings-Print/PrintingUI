import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'printingUI';
  isMenuRequire = false;

  constructor(private router: Router
  ) {}
  ngDoCheck(): void {
    const currentUrl = this.router.url;
  if (currentUrl.includes('/login') || currentUrl.includes('/signup')||currentUrl.includes('/sidePanel')) {
    this.isMenuRequire = false;
  } else {
    this.isMenuRequire = true;
  }
}
}
