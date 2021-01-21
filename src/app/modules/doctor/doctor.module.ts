import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from 'src/app/shared/components/doctor/doctor-list/doctor-list.component';

import { DoctorPageComponent } from 'src/app/shared/components/doctor/doctor-page/doctor-page.component';
import { DoctorItemComponent } from 'src/app/shared/components/doctor/doctor-item/doctor-item.component';
import { DoctorDescriptionItemComponent } from 'src/app/shared/components/doctor/doctor-item/doctor-description-item/doctor-description-item.component';
import { EditDoctorComponent } from 'src/app/shared/components/doctor/edit-doctor/edit-doctor.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { RoleGuard } from 'src/app/guards/role-guard.service';


const routes: Routes = [
  {path:'',component:DoctorComponent},
  {path:'list',component:DoctorListComponent},
  {path:':id',component:DoctorPageComponent},
  {path:':id/edit-doctor',component:EditDoctorComponent,canActivate:[AuthGuard, RoleGuard], data:{roles:['admin','doctor']}},
];

@NgModule({
  declarations: [DoctorListComponent,
    DoctorComponent,
    DoctorItemComponent, 
    DoctorPageComponent, 
    DoctorDescriptionItemComponent, 
    EditDoctorComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
})
export class DoctorModule {
}
