import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServicesListComponent} from '../../shared/components/services/services-list/services-list.component';
import {HomeComponent} from '../../shared/components/home/home.component';

const routes: Routes = [
  {path: 'services', component: ServicesListComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MatDatepickerModule],
})
export class ClientModule {
}
