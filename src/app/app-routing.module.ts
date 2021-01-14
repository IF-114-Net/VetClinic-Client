import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorListComponent } from './shared/components/doctor/doctor-list/doctor-list.component';
import { DoctorPageComponent } from './shared/components/doctor/doctor-page/doctor-page.component';

const routes: Routes = [{path:'doctor',component:DoctorListComponent},  
{path:'doctor/:id',component:DoctorPageComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
