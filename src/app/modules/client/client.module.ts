import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServicesListComponent} from '../../shared/components/services/services-list/services-list.component';
import {HomeComponent} from '../../shared/components/home/home.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: 'services', component: ServicesListComponent},
  {path: 'client', component: ClientComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ClientModule {
}
