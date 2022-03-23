import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightDemoComponent } from './hightlight-demo.component';

describe('HightlightDemoComponent', () => {
  let component: HightlightDemoComponent;
  let fixture: ComponentFixture<HightlightDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightlightDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HightlightDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
