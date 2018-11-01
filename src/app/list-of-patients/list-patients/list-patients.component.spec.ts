import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { listPatientsComponent } from './list-patients.component';

describe('listPatientsComponent', () => {
  let component: listPatientsComponent;
  let fixture: ComponentFixture<listPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ listPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
