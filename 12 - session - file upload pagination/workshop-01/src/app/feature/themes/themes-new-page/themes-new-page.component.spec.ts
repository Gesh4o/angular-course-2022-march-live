import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesNewPageComponent } from './themes-new-page.component';

describe('ThemesNewPageComponent', () => {
  let component: ThemesNewPageComponent;
  let fixture: ComponentFixture<ThemesNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
