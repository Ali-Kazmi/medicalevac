import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosestComponent } from './closest.component';

describe('ClosestComponent', () => {
  let component: ClosestComponent;
  let fixture: ComponentFixture<ClosestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
