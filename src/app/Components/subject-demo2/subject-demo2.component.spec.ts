import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDemo2Component } from './subject-demo2.component';

describe('SubjectDemo2Component', () => {
  let component: SubjectDemo2Component;
  let fixture: ComponentFixture<SubjectDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectDemo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
