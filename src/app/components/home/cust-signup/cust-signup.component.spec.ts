import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSignupComponent } from './cust-signup.component';

describe('CustSignupComponent', () => {
  let component: CustSignupComponent;
  let fixture: ComponentFixture<CustSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
