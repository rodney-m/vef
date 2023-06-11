import { Component } from '@angular/core';

@Component({
  selector: 'vef-hope-page',
  templateUrl: './hope-page.component.html',
  styleUrls: ['./hope-page.component.scss'],
})
export class HopePageComponent {
  bestSellers : any[] = [
    {
      url: 'https://source.unsplash.com/random/?roses%20valentine',
      title: 'VEF Tin De Rosa (Petite)',
      price: 'USD $100'
    },
    {
      url: 'https://source.unsplash.com/random/?roses%20gift',
      title: 'VEF Tin De Rosa',
      price: 'USD $150'
    },
    {
      url: 'https://source.unsplash.com/random/?roses%20flowers',
      title: 'VEF Square',
      price: 'USD $150'
    },
    {
      url: 'https://source.unsplash.com/random/?roses%20Bouquet',
      title: 'VEF Queen of hearts',
      price: 'USD $150'
    },
    {
      url: 'https://source.unsplash.com/random/?roses%20birthdays',
      title: 'VEF Mini Dome',
      price: 'USD $200'
    },
    {
      url: 'https://source.unsplash.com/random/?roses%20graduation',
      title: 'VEF Large heart',
      price: 'USD $200'
    },
    {
      url: 'https://source.unsplash.com/random/?roses%20get%20well%20soon',
      title: 'VEF Hot Air Balloon',
      price: 'USD $300'
    },
    {
      url: 'https://source.unsplash.com/random/?roses%20gift',
      title: 'VEF Tin De Rosa',
      price: 'USD $150'
    },
    {
      url: 'https://source.unsplash.com/random/?roses%20birthdays',
      title: 'VEF Mini Dome',
      price: 'USD $200'
    }
  ]
}
