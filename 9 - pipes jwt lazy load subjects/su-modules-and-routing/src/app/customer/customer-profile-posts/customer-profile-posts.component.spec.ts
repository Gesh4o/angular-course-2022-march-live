import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfilePostsComponent } from './customer-profile-posts.component';

describe('CustomerProfilePostsComponent', () => {
  let component: CustomerProfilePostsComponent;
  let fixture: ComponentFixture<CustomerProfilePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfilePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfilePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
