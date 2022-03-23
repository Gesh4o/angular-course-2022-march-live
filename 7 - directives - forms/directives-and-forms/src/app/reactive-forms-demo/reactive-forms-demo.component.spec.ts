import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsDemoComponent } from './reactive-forms-demo.component';

describe('ReactiveFormsDemoComponent', () => {
  let component: ReactiveFormsDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
