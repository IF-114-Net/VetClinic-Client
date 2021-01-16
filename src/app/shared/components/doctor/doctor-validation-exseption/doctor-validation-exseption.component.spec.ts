import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorValidationExseptionComponent } from './doctor-validation-exseption.component';

describe('DoctorValidationExseptionComponent', () => {
  let component: DoctorValidationExseptionComponent;
  let fixture: ComponentFixture<DoctorValidationExseptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorValidationExseptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorValidationExseptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
