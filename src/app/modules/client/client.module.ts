import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { ServicesListComponent } from '../../shared/components/services/services-list/services-list.component';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { ClientComponent } from './client.component';
import { ClientCabinetComponent } from 'src/app/modules/client/client-cabinet/client-cabinet.component';
import { ClientMainInfoComponent } from 'src/app/modules/client/client-main-info/client-main-info.component';
import { ClientRegisterFormComponent } from 'src/app/modules/client/client-register-form/client-register-form.component';
import { CreateAnimalItemComponent } from './create-animal-item/create-animal-item.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { ClientAppointmentComponent } from './client-appointment/client-appointment.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { AuthGuard } from '../../guards/auth-guard.service';
import { RoleGuard } from '../../guards/role-guard.service';

const routes: Routes = [
    {
        path: 'client/make-appointment',
        component: MakeAppointmentComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['client'] }
    },
    {
        path: 'client/add-animal',
        component: AddAnimalComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['client'] }
    },
    { path: 'services', component: ServicesListComponent },
    { path: 'client', component: ClientCabinetComponent },
    { path: '', component: HomeComponent },
    { path: 'create-client', component: ClientRegisterFormComponent }
];

@NgModule({
    declarations: [
        ClientComponent,
        ClientRegisterFormComponent,
        ClientMainInfoComponent,
        ClientCabinetComponent,
        AnimalItemComponent,
        CreateAnimalItemComponent,
        ClientAppointmentComponent,
        AddAnimalComponent,
        MakeAppointmentComponent
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
export class ClientModule {}
