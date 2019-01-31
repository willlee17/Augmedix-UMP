import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fake2Component } from './fake2.component';

describe('Fake2Component', () => {
  let component: Fake2Component;
  let fixture: ComponentFixture<Fake2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fake2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fake2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
