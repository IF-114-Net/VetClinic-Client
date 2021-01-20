import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import {ServicesComponent} from '../../shared/components/services/services.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {path: '', component: AdminComponent,
    children: [
      {path: 'services', component: ServicesComponent},
    ]},
];

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
  ],
})
export class AdminModule {
}
