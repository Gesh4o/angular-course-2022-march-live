import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileAlbumsComponent } from './customer-profile-albums.component';

describe('CustomerProfileAlbumsComponent', () => {
  let component: CustomerProfileAlbumsComponent;
  let fixture: ComponentFixture<CustomerProfileAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfileAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
