import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  isScrolled = false;
  isBrowser: boolean;

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && this.navbarCollapse) {
      // Close on nav link click
      const links = this.navbarCollapse.nativeElement.querySelectorAll('a.nav-link');
      links.forEach((link: HTMLElement) => {
        link.addEventListener('click', () => this.closeNavbar());
      });

      // Close on custom button click
      const closeBtn = this.navbarCollapse.nativeElement.querySelector('#closeMenu');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeNavbar());
      }
    }
  }

  closeNavbar() {
    const bsCollapse = bootstrap.Collapse.getInstance(this.navbarCollapse.nativeElement);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50;
    }
  }
}
