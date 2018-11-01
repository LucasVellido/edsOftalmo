import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularyOphtalmologistyComponent } from './formulary-ophtalmologisty.component';

describe('FormularyOphtalmologistyComponent', () => {
  let component: FormularyOphtalmologistyComponent;
  let fixture: ComponentFixture<FormularyOphtalmologistyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularyOphtalmologistyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularyOphtalmologistyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
