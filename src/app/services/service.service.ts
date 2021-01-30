import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Service} from '../models/service/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public apiService: ApiService) { }

  formData: Service = new Service();

  addService(): Observable<Service>  {
     return this.apiService.addEntity('service', this.formData);
  }

  updateService(): Observable<Service> {
     return this.apiService.updateEntity('service', this.formData.id as number, this.formData);
  }

  getServices(): Observable<Service[]> {
    return this.apiService.getEntity('service');
  }

  deleteService(id: number): Observable<Service>{
    return this.apiService.deleteEntity('service', id);
  }

}
