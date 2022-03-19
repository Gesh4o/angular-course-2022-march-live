import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesDetailPageComponent } from './themes-detail-page.component';

describe('ThemesDetailPageComponent', () => {
  let component: ThemesDetailPageComponent;
  let fixture: ComponentFixture<ThemesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
