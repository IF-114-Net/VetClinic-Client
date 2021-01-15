import { NgModule } from '@angular/core';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { DoctorItemComponent } from './doctor-item/doctor-item.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { DoctorDescriptionItemComponent } from './doctor-item/doctor-description-item/doctor-description-item.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DoctorListComponent, DoctorItemComponent, DoctorPageComponent, DoctorDescriptionItemComponent, EditDoctorComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
