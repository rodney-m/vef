import { Component } from '@angular/core';

@Component({
  selector: 'vef-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent {
  products : any[] = [
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
  ]
}
