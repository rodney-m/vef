import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HopePageComponent } from './hope-page.component';

describe('HopePageComponent', () => {
  let component: HopePageComponent;
  let fixture: ComponentFixture<HopePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HopePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HopePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
