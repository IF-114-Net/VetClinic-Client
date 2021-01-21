import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'client', component: ClientComponent,},
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
