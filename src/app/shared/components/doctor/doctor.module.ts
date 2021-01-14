import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { DoctorItemComponent } from './doctor-item/doctor-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { DoctorDescriptionItemComponent } from './doctor-item/doctor-description-item/doctor-description-item.component';

const appRoutes: Routes=[  
  {path:'doctor',component:DoctorListComponent},  
  {path:'doctor/:id',component:DoctorPageComponent},  
]

@NgModule({
  declarations: [DoctorListComponent, DoctorItemComponent, DoctorPageComponent, DoctorDescriptionItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ]
})
export class DoctorModule { }
