import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor/doctor';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {

  @Input() doctor!:Doctor;

  constructor() { }

  ngOnInit(): void {
  }

}
