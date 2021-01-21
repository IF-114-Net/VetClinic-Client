import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/doctor/animal';
import { AnimalData } from 'src/app/models/doctor/animalData';
import { AnimalType } from 'src/app/models/doctor/animalType';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css']
})
export class AnimalItemComponent implements OnInit {

  animal!:Animal;
  animalType!:AnimalType;
  id!:number;
  closedInformation:boolean =true;
  
  constructor(
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let id= this.activatedRoute.snapshot.paramMap.get('id') ;
    this.id = id ? parseInt(id) : 0;
    this.apiService.getEntityById('animals',this.id).subscribe((data: AnimalData)=>{
    this.animal=data.data;
    this.getAnimalTypeData(parseInt(this.animal.animalTypeId))
    console.log(this.animal) 
  })  
}

getAnimalTypeData(id:number){
  this.apiService.getEntityById('animaltypes',id).subscribe((data: AnimalType)=>{
    this.animalType=data;})
}
goToSettings(){}

}
