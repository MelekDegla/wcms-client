import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHolidaysComponent } from './modify-holidays.component';

describe('ModifyHolidaysComponent', () => {
  let component: ModifyHolidaysComponent;
  let fixture: ComponentFixture<ModifyHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
