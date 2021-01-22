import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/models/doctor/animal';
import { AnimalData } from 'src/app/models/doctor/animalData';
import { AnimalsData } from 'src/app/models/doctor/animalsData';
import { AnimalType } from 'src/app/models/doctor/animalType';
import { Filter } from 'src/app/models/queries/filter';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {  

  constructor(private activatedRoute:ActivatedRoute,
    private apiService:ApiService) { }

  ngOnInit(): void {
  }

  

}
