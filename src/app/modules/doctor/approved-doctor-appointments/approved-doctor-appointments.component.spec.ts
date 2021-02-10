import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedDoctorAppointmentsComponent } from './approved-doctor-appointments.component';

describe('ApprovedDoctorAppointmentsComponent', () => {
  let component: ApprovedDoctorAppointmentsComponent;
  let fixture: ComponentFixture<ApprovedDoctorAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedDoctorAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedDoctorAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
