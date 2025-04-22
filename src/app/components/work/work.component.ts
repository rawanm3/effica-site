import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any; // Allows use of Bootstrap's JS without TS complaints

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // This ensures Bootstrap carousel logic only runs in the browser
      const workCarousel = document.querySelector('#workCarousel');
      if (workCarousel) {
        new bootstrap.Carousel(workCarousel);
      }
    }
  }
}

