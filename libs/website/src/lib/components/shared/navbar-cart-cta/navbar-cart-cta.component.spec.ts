import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarCartCtaComponent } from './navbar-cart-cta.component';

describe('NavbarCartCtaComponent', () => {
  let component: NavbarCartCtaComponent;
  let fixture: ComponentFixture<NavbarCartCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarCartCtaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarCartCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
