import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fake1Component } from './fake1.component';

describe('Fake1Component', () => {
  let component: Fake1Component;
  let fixture: ComponentFixture<Fake1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fake1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fake1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
