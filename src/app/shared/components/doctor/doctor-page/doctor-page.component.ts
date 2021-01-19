import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/models/doctor/doctor';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {

  doctor!:Doctor;
  id!:number;
  isEmploee:boolean=false;

  constructor(private activatedRoute: ActivatedRoute, 
    private doctorService: ApiService,
    private authService:AuthService,
    ) { }

  ngOnInit(): void {  
    let id= this.activatedRoute.snapshot.paramMap.get('id') ;
    this.id = id ? parseInt(id) : 0;
    this.doctorService.getEntity('doctor',this.id).subscribe((data: Doctor)=>{
    this.doctor=data;      
    });

    if(this.authService.userData){
      this.isEmploee=this.authService.isInRole('admin')
      ||this.authService.isInRole('doctor');
    }    
  }

}
