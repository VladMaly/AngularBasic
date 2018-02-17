import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGroupFormComponent } from './test-group-form.component';

describe('TestGroupFormComponent', () => {
  let component: TestGroupFormComponent;
  let fixture: ComponentFixture<TestGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
