import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListItemComponent } from './customer-list-item.component';

describe('CustomerListItemComponent', () => {
  let component: CustomerListItemComponent;
  let fixture: ComponentFixture<CustomerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
