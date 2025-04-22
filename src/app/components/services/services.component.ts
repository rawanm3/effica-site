import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  @ViewChildren('contentBlock', { read: ElementRef }) contentBlocks!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Run this code ONLY in the browser
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, {
        threshold: 0.3
      });

      this.contentBlocks.forEach(block => {
        observer.observe(block.nativeElement);
      });
    }
  }
}
