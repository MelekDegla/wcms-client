import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptAuthorizationComponent } from './accept-authorization.component';

describe('AcceptAuthorizationComponent', () => {
  let component: AcceptAuthorizationComponent;
  let fixture: ComponentFixture<AcceptAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
