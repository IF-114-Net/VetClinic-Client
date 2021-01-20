import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor/doctor';
import { DoctorData } from '../models/doctor/doctorData';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctor!:Doctor;

  constructor(private http: HttpClient,
    private authService:AuthService) { }
  
  getDoctorByQuery(params:HttpParams): Observable<any> {
    return this.http.get(`${environment.BASEURL}/doctor`,{params});
  }

  private doctorSource = new BehaviorSubject<Doctor>(this.doctor);
  currDoctor = this.doctorSource.asObservable();

  changeDoctor(doctor:Doctor){
    this.doctorSource.next(doctor);
  }

}
