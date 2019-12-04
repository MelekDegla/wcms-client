import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthorizationComponent } from './add-authorization.component';

describe('AddAuthorizationComponent', () => {
  let component: AddAuthorizationComponent;
  let fixture: ComponentFixture<AddAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
