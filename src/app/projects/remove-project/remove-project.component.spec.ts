import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProjectComponent } from './remove-project.component';

describe('RemoveProjectComponent', () => {
  let component: RemoveProjectComponent;
  let fixture: ComponentFixture<RemoveProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
