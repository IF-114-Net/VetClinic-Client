import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor/doctor';
import { DoctorData } from 'src/app/models/doctor/doctorData';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors!: Doctor[]; 
  isClient:boolean=this.authService.isInRole("client")
  ||!this.authService.isLogedIn()

  constructor(private router: Router,
    private authService: AuthService,
     private doctorService: ApiService) { }

  ngOnInit(): void {    
    this.doctorService.getEntity('doctor').subscribe((data: DoctorData)=>{
    this.doctors=data.data;});
  }

  onSelect(doctor:Doctor){
    if(!this.isClient)   
      this.router.navigate(["doctor",doctor.id]);
  }
}
