import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizarComponent } from './organizar.component';

describe('OrganizarComponent', () => {
  let component: OrganizarComponent;
  let fixture: ComponentFixture<OrganizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
