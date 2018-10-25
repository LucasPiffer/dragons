import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoncreateComponent } from './dragon-create.component';

describe('DragoncreateComponent', () => {
  let component: DragoncreateComponent;
  let fixture: ComponentFixture<DragoncreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragoncreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
