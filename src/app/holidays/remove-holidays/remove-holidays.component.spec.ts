import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHolidaysComponent } from './remove-holidays.component';

describe('RemoveHolidaysComponent', () => {
  let component: RemoveHolidaysComponent;
  let fixture: ComponentFixture<RemoveHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
