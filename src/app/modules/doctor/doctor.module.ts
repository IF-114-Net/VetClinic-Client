import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from 'src/app/shared/components/doctor/doctor-list/doctor-list.component';

import { DoctorPageComponent } from 'src/app/shared/components/doctor/doctor-page/doctor-page.component';
import { DoctorItemComponent } from 'src/app/shared/components/doctor/doctor-item/doctor-item.component';
import { DoctorDescriptionItemComponent } from 'src/app/shared/components/doctor/doctor-item/doctor-description-item/doctor-description-item.component';
import { CreateDoctorComponent } from 'src/app/shared/components/doctor/create-doctor/create-doctor.component';
import { EditDoctorComponent } from 'src/app/shared/components/doctor/edit-doctor/edit-doctor.component';
import { DoctorValidationExceptionComponent } from 'src/app/shared/components/doctor/doctor-validation-exception/doctor-validation-exception.component';
import { MaterialModule } from '../material/material.module';


const routes: Routes = [
  {path:'',component:DoctorComponent},
  {path:'list',component:DoctorListComponent},
  {path:'create-doctor',component:CreateDoctorComponent},
  {path:':id',component:DoctorPageComponent},
  {path:':id/edit-doctor',component:EditDoctorComponent},
];

@NgModule({
  declarations: [DoctorListComponent,
    DoctorComponent,
    DoctorItemComponent, 
    DoctorPageComponent, 
    DoctorDescriptionItemComponent, 
    EditDoctorComponent, 
    DoctorValidationExceptionComponent, 
    CreateDoctorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class DoctorModule {
}
