import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any; // Prevent TypeScript errors

@Component({
  selector: 'app-testemonials',
  standalone: true,
  templateUrl: './testemonials.component.html',
  styleUrl: './testemonials.component.scss'
})
export class TestemonialsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const testemonialsCarousel = document.querySelector('#testemonialsCarousel');
      if (testemonialsCarousel) {
        new bootstrap.Carousel(testemonialsCarousel);
      }
    }
  }
}