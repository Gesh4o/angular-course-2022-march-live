import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2Component } from './app2.component';

describe('App2Component', () => {
  let component: App2Component;
  let fixture: ComponentFixture<App2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
