import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServicesListComponent} from '../../shared/components/services/services-list/services-list.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CreateAnimalItemComponent } from './create-animal-item/create-animal-item.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';	


const routes: Routes = [
  {path: 'services', component: ServicesListComponent},
  {path: 'client', component: ClientComponent},
  {path: '', component: HomeComponent},
  {path: 'animal/:id', component: AnimalItemComponent},
];

@NgModule({
  declarations: [
    ClientComponent,
    AnimalItemComponent,
    CreateAnimalItemComponent,
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
