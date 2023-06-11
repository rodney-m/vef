import { Component } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'vef-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  carouselContent :any[] = [
    {
      heading: 'Send the Perfect Gift',
      cta: 'Buy Now',
      paragraph: "Say it with flowers! Whether it's for a birthday, anniversary, or just because, our gorgeous blooms make the perfect gift. Browse our selection and send a thoughtful message to someone special today",
      image: 'assets/images/courosel-1.png'
      
    },
    {
      heading: 'Fresh Cut Flowers Delivered to You',
      cta: 'Buy Now',
      paragraph: 'we make it easy to enjoy beautiful flowers in your home. Our fresh-cut blooms are delivered straight to your door, ready to be arranged and admired. Explore our collection and order now to bring some color to your life',
      image: 'assets/images/courosel-3.jpg'
    },
    {
      heading: 'Serenade your loved ones with our Saxophone Delivery Service',
      cta: 'Buy Now',
      paragraph: 'Our flower delivery service just got even better with the addition of our Saxophone Delivery Service! Surprise your loved ones with a beautiful bouquet of flowers accompanied by the smooth sounds of a saxophone.',
      image: 'assets/images/courosel-2.jpg'
    },
  ]


}
