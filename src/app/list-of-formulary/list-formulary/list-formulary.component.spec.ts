import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormularyComponent } from './list-formulary.component';

describe('ListFormularyComponent', () => {
  let component: ListFormularyComponent;
  let fixture: ComponentFixture<ListFormularyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormularyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
