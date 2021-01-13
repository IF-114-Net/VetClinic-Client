import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DoctorListComponent } from './shared/components/doctor/doctor-list/doctor-list.component';
import { DoctorItemComponent } from './shared/components/doctor/doctor-item/doctor-item.component';
import { DoctorPageComponent } from './shared/components/doctor/doctor-page/doctor-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[  
  {path:'doctor',component:DoctorListComponent},  
  {path:'doctor/:id',component:DoctorPageComponent},  
]

@NgModule({
  declarations: [AppComponent, DoctorListComponent, DoctorItemComponent, DoctorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
