import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsDemoComponent } from './template-forms-demo.component';

describe('TemplateFormsDemoComponent', () => {
  let component: TemplateFormsDemoComponent;
  let fixture: ComponentFixture<TemplateFormsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
