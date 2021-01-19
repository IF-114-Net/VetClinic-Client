import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorListComponent } from './shared/components/doctor/doctor-list/doctor-list.component';
import { DoctorPageComponent } from './shared/components/doctor/doctor-page/doctor-page.component';
import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';
import { HomeComponent } from './shared/components/home/home.component';
import {ServicesComponent} from './shared/components/services/services.component';
import {ServicesListComponent} from './shared/components/services/services-list/services-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UnauthorizedComponent } from './shared/components/unauthorized/unauthorized.component';

const routes: Routes = [
  {path: 'doctor', component: DoctorListComponent},
  {path: 'doctor/:id', component: DoctorPageComponent},
  {path: 'admin/services', component: ServicesComponent},
  {path: 'services', component: ServicesListComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' },
  
  // { path: 'testAdmin', component: LandingMakeAppointmentComponent, canActivate: [AuthGuard, RoleGuard],
  // data: {role: 'admin'} },

  { path: 'forbidden', component: ForbiddenComponent, pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorizedComponent, pathMatch: 'full' },

  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
