import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseAuthorizationComponent } from './refuse-authorization.component';

describe('RefuseAuthorizationComponent', () => {
  let component: RefuseAuthorizationComponent;
  let fixture: ComponentFixture<RefuseAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuseAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuseAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
