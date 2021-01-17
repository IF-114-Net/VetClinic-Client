import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicesComponent} from './shared/components/services/services.component';

const routes: Routes = [
  {path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
