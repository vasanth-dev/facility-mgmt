import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacMyfacilityComponent } from './fac-myfacility.component';

describe('FacMyfacilityComponent', () => {
  let component: FacMyfacilityComponent;
  let fixture: ComponentFixture<FacMyfacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacMyfacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacMyfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
