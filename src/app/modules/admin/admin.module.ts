import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import {ServicesComponent} from '../../shared/components/services/services.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { RoleListComponent } from 'src/app/shared/components/role/role-list/role-list.component';
import { CreateRoleComponent } from 'src/app/shared/components/role/create-role/create-role.component';


const routes: Routes = [
  {path: '', component: AdminComponent,
    children: [
      {path: 'services', component: ServicesComponent},
      {path: 'create-doctor', component: CreateDoctorComponent},
      { path: 'role', component: RoleListComponent},
    ]},  
 
  {path: 'role/create', component: CreateRoleComponent},
  {path: 'role/edit/:id', component: CreateRoleComponent},
];

@NgModule({
  declarations: [
    AdminComponent,
    CreateDoctorComponent,
    RoleListComponent, CreateRoleComponent
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
