import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesListComponent} from '../../shared/components/services/services-list/services-list.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ClientCabinetComponent} from 'src/app/shared/components/client/client-cabinet/client-cabinet.component';
import { ClientMainInfoComponent} from 'src/app/shared/components/client/client-main-info/client-main-info.component';
import { ClientRegisterFormComponent} from 'src/app/shared/components/client/client-register-form/client-register-form.component'
import { CreateAnimalItemComponent } from './create-animal-item/create-animal-item.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';	
const routes: Routes = [
  {path: 'services', component: ServicesListComponent},
  {path: 'client', component: ClientCabinetComponent},
  {path: '', component: HomeComponent},
  {path: 'create-client', component: ClientRegisterFormComponent}
];

@NgModule({
  declarations: [
    ClientComponent,
    ClientRegisterFormComponent,
    ClientMainInfoComponent,
    ClientCabinetComponent,
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
