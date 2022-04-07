import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { increment } from "src/app/+store";
import { MyCounterComponent } from "./my-counter.component";

fdescribe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCounterComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => of(0),
            dispatch: () => { },
          }
        }
      ]
    })

    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
  });

  it('should show 0 as initial state', () => {
    // First 'detectChanges' call will trigger ngOnInit();
    fixture.detectChanges();

    const countContent = fixture.debugElement.query(By.css('div'));
    expect(countContent).toBeTruthy();
    expect(countContent.nativeElement.textContent.trim()).toEqual('Current Count: 0');
  });

  it('should trigger action upon clicking increment', () => {
    const store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture.detectChanges();

    const incrementButton = fixture.debugElement.query(By.css('[data-id="increment-btn"]'));
    incrementButton.triggerEventHandler('click', {});

    expect(store.dispatch).toHaveBeenCalledWith(increment());
  });


  it('should trigger action upon clicking decrement');

  it('should trigger action upon clicking reset');
});