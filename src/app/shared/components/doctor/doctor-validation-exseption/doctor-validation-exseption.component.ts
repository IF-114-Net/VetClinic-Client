import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-validation-exseption',
  templateUrl: './doctor-validation-exseption.component.html',
  styleUrls: ['./doctor-validation-exseption.component.css']
})
export class DoctorValidationExseptionComponent implements OnInit {

  @Input() exeption: any;
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void { 
    console.log(this.exeption)   
  }

}
