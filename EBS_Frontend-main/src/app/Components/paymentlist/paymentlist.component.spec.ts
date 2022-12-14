import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentlistComponent } from './paymentlist.component';

describe('PaymentlistComponent', () => {
  let component: PaymentlistComponent;
  let fixture: ComponentFixture<PaymentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
