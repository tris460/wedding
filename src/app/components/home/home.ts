import { Component, AfterViewInit } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Details } from '../details/details';
import { Itinerary } from '../itinerary/itinerary';
import { Location } from '../location/location';
import { Gallery } from '../gallery/gallery';
import { DressCode } from '../dress-code/dress-code';
import { Faq } from '../faq/faq';
import { Registry } from '../registry/registry';
import { Rsvp } from '../rsvp/rsvp';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe,
    Details,
    Itinerary,
    Location,
    Gallery,
    DressCode,
    Faq,
    Registry,
    Rsvp,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      const img = document.querySelector('.main-image') as HTMLImageElement;
      if (img) {
        img.classList.add('loaded');
      }
    }, 100);
  }
}
