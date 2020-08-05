import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrsOptionsComponent } from './mgrs-options.component';

describe('MgrsOptionsComponent', () => {
  let component: MgrsOptionsComponent;
  let fixture: ComponentFixture<MgrsOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrsOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
