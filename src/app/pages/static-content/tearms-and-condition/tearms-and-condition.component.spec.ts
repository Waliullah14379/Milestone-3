import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TearmsAndConditionComponent } from './tearms-and-condition.component';

describe('TearmsAndConditionComponent', () => {
  let component: TearmsAndConditionComponent;
  let fixture: ComponentFixture<TearmsAndConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TearmsAndConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TearmsAndConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
