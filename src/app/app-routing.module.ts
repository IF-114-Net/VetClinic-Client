import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDoctorComponent } from './shared/components/doctor/create-doctor/create-doctor.component';
import { DoctorListComponent } from './shared/components/doctor/doctor-list/doctor-list.component';
import { DoctorPageComponent } from './shared/components/doctor/doctor-page/doctor-page.component';
import { EditDoctorComponent } from './shared/components/doctor/edit-doctor/edit-doctor.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [{path:'doctor',component:DoctorListComponent},  
  {path:'doctor/create-doctor',component:CreateDoctorComponent},
  {path:'doctor/:id',component:DoctorPageComponent},
  {path:'doctor/:id/:edit-doctor',component:EditDoctorComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
