import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseHolidysComponent } from './refuse-holidys.component';

describe('RefuseHolidysComponent', () => {
  let component: RefuseHolidysComponent;
  let fixture: ComponentFixture<RefuseHolidysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuseHolidysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuseHolidysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
