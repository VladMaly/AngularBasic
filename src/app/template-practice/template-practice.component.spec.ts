import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePracticeComponent } from './template-practice.component';

describe('TemplatePracticeComponent', () => {
  let component: TemplatePracticeComponent;
  let fixture: ComponentFixture<TemplatePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
