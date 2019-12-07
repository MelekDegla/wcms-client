import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptHolidysComponent } from './accept-holidys.component';

describe('AcceptHolidysComponent', () => {
  let component: AcceptHolidysComponent;
  let fixture: ComponentFixture<AcceptHolidysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptHolidysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptHolidysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
