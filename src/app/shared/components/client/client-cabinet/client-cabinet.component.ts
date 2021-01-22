import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/doctor/animal';
import { AnimalsData } from 'src/app/models/doctor/animalsData';
import { AnimalType } from 'src/app/models/doctor/animalType';
import { Filter } from 'src/app/models/queries/filter';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client-cabinet',
  templateUrl: './client-cabinet.component.html',
  styleUrls: ['./client-cabinet.component.css']
})
export class ClientCabinetComponent implements OnInit {

  activeAnimal!:number;
  animals!:Animal[]  
  animalTypeId!:number;
  animalTypes!:AnimalType[];  
  id!:number;

  client: any = {
    "id":null,
    "userName": null,
    "firstName": null,
    "lastName": null,
    "email": null,
    "phoneNumber":null
  };
  constructor(public authService : AuthService, public apiService: ApiService) {
    if(this.authService.isLogedIn())
    {
      this.initializeClient();
    }
    else 
    {
      console.log("mistake happened");
    }
   }

  ngOnInit(): void {     
  }

  initializeAnimal(clientId:number)
  {
    let params:Filter = {"clientId":clientId.toString()}   

    this.apiService.getEntity('animals',params).subscribe((data: AnimalsData)=>{
    this.animals=data.data;    
      this.getAnimalTypeData();          
    })  
  }

  initializeClient()
  {
    let id: string = this.authService.userData.sub;
    let filter: Filter = {"UserId": id};
    this.apiService.getEntity("Client", filter).subscribe(response =>
      {
        this.client = response[0];  
        this.initializeAnimal(response[0].id)      
      },
      error =>
      console.log("error : " + error));    
  }
  
  getAnimalTypeData(){
  this.apiService.getEntity('animaltypes').subscribe((data: AnimalType[])=>{
    this.animalTypes=data    
   })
    
  }

  notActiveAnimal(active:any){
  this.activeAnimal=active
  }


}
