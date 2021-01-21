import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { RoleGuard } from 'src/app/guards/role-guard.service';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path:'create-doctor',component:CreateDoctorComponent, canActivate:[AuthGuard, RoleGuard], data:{roles:['admin']}},
];

@NgModule({
  declarations: [
    AdminComponent,
    CreateDoctorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class AdminModule {
}
