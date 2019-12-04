import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAuthorizationComponent } from './modify-authorization.component';

describe('ModifyAuthorizationComponent', () => {
  let component: ModifyAuthorizationComponent;
  let fixture: ComponentFixture<ModifyAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
