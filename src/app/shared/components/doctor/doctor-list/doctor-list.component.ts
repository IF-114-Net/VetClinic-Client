import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor/doctor';
import { DoctorData } from 'src/app/models/doctor/doctorData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors!: Doctor[];  
  constructor(private router: Router, private doctorService: ApiService) { }

  ngOnInit(): void {    
    this.doctorService.getEntity('doctor').subscribe((data: DoctorData)=>{
    this.doctors=data.data;});
  }

  onSelect(doctor:Doctor){
    this.router.navigate(["doctor",doctor.id])    
  }
}
