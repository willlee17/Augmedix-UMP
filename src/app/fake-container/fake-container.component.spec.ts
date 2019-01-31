import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeContainerComponent } from './fake-container.component';

describe('FakeContainerComponent', () => {
  let component: FakeContainerComponent;
  let fixture: ComponentFixture<FakeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
