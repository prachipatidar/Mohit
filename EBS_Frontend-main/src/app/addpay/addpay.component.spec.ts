import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpayComponent } from './addpay.component';

describe('AddpayComponent', () => {
  let component: AddpayComponent;
  let fixture: ComponentFixture<AddpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
