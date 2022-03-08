import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamNewsComponent } from './exam-news.component';

describe('ExamNewsComponent', () => {
  let component: ExamNewsComponent;
  let fixture: ComponentFixture<ExamNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
