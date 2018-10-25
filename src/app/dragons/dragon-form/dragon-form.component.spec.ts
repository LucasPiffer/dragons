import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonForm } from './dragon-form.component';

describe('DragonForm.ComponentComponent', () => {
  let component: DragonForm;
  let fixture: ComponentFixture<DragonForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
