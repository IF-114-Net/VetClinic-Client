import { HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor/doctor';
import { DoctorData } from 'src/app/models/doctor/doctorData';
import { Filter } from 'src/app/models/queries/filter';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private router: Router,
    private doctorService:ApiService,
    private authService:AuthService
    ) { }

    doctor!:Doctor;

  ngOnInit(): void {      
    let params:Filter = {"UserId":this.authService.userData.sub}
    this.doctorService.getEntity("doctor",params).subscribe(
      (data:DoctorData)=> {this.doctor=data.data[0];
      this.router.navigate(["doctor",this.doctor.id]);}
    );    
  }

}
