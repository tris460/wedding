import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
