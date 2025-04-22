import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isVisible = false;
  isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.isBrowser) return; // Skip in SSR

    const elements = this.el.nativeElement.querySelectorAll(
      '.about-p, .about-h3, .line-bg, .line-bg2, .line'
    );

    elements.forEach((element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        this.isVisible = true;
      }
    });
  }
}