import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAuthorizationComponent } from './remove-authorization.component';

describe('RemoveAuthorizationComponent', () => {
  let component: RemoveAuthorizationComponent;
  let fixture: ComponentFixture<RemoveAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
