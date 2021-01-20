import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from 'src/app/shared/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  
  {path: 'client', component: ClientComponent},
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
  ],
})
export class ClientModule {
}
