import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-location',
  imports: [TranslatePipe],
  templateUrl: './location.html',
  styleUrl: './location.scss'
})
export class Location {

  ngAfterViewInit() {
    const ringsImg = document.querySelector('.std-image') as HTMLImageElement;
    if (ringsImg) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            ringsImg.classList.add('loaded');
            observer.unobserve(ringsImg);
          }
        });
      }, { threshold: 0.3 });
      
      observer.observe(ringsImg);
    }
  }
  
  openInMaps(): void {
    const mapsUrl = 'https://maps.app.goo.gl/XMijGBCwqNPSQLoN8';
    window.open(mapsUrl, '_blank');
  }
}
