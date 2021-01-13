import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor/doctor';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {

  doctor!:Doctor;

  constructor(private doctorService: ApiService) { }

  ngOnInit(): void {
    this.doctorService.getEntity('doctor',1).subscribe((data: Doctor)=>{
      this.doctor=data;
      console.log(this.doctor);
    });
  }

}
