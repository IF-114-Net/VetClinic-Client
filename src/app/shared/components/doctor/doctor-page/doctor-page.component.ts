import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor/doctor';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {

  doctor!:Doctor;
  id!:number;

  constructor(private router: Router,  private activatedRoute: ActivatedRoute, private doctorService: ApiService) { }

  ngOnInit(): void {
    let id= this.activatedRoute.snapshot.paramMap.get('id') ;
    this.id = id ? parseInt(id) : 0;
    this.doctorService.getEntity('doctor',this.id).subscribe((data: Doctor)=>{
    this.doctor=data;      
    });
  }

}
