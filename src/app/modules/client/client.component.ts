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
  animals!:Animal[]  
  animalType:AnimalType[]=new Array<AnimalType>();
  id!:number;
  activeAnimal!:number;

  constructor(private activatedRoute:ActivatedRoute,
    private apiService:ApiService) { }

  ngOnInit(): void { 
    
    let params:Filter = {"clientId":"1"}   

    this.apiService.getEntity('animals',params).subscribe((data: AnimalsData)=>{
    this.animals=data.data; 
    
    for(let animal of this.animals)
      {      
      let id:number =parseInt(animal.animalTypeId) 
      this.getAnimalTypeData(id)      
      }          
    })  
  }

  getAnimalTypeData(id:number){
  this.apiService.getEntityById('animaltypes',id).subscribe((data: AnimalType)=>{
    this.animalType.push(data)})
  }

  notActiveAnimal(active:any){
  this.activeAnimal=active
  }

}
