import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTrendsComponent } from './crypto-trends.component';

describe('CryptoTrendsComponent', () => {
  let component: CryptoTrendsComponent;
  let fixture: ComponentFixture<CryptoTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
