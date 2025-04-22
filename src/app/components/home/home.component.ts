import { Component, ElementRef, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isVisible = false;
  isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.isBrowser) return; // ⛔ Skip on server

    const element = this.el.nativeElement.querySelector('.rt-photo');
    if (!element) return;

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      this.isVisible = true;
    }
  }
}