import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HopePageComponent } from './pages/hope-page/hope-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarCartCtaComponent } from './components/shared/navbar-cart-cta/navbar-cart-cta.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeroSectionComponent } from './components/home-page/hero-section/hero-section.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  {
    path: '',
    component: HopePageComponent,
  },
  {
    path: 'shop',
    component: ShopPageComponent,
  },
];
@NgModule({
  imports: [SwiperModule, CommonModule, RouterModule.forChild(routes), NzIconModule],
  declarations: [
    HopePageComponent,
    NavbarComponent,
    NavbarCartCtaComponent,
    HeroSectionComponent,
    ShopPageComponent,
  ],
})
export class WebsiteModule {}
