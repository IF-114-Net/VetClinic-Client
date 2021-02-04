import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/doctor/animal';
import { AnimalType } from 'src/app/models/doctor/animalType';
import { Filter } from 'src/app/models/queries/filter';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AddAnimalComponent } from '../../../../modules/client/add-animal/add-animal.component';
import { MatDialog } from '@angular/material/dialog';
import { PageResponse } from 'src/app/models/doctor/pageResponse';

@Component({
    selector: 'app-client-cabinet',
    templateUrl: './client-cabinet.component.html',
    styleUrls: ['./client-cabinet.component.css']
})
export class ClientCabinetComponent implements OnInit {

  activeAnimal!:number;
  animals!:Animal[]  
  animalTypeId!:number;    
  id!:number;

    animalData!: Animal;

    client: any = {
        'id': null,
        'userName': null,
        'firstName': null,
        'lastName': null,
        'email': null,
        'phoneNumber': null
    };

    constructor(public dialog: MatDialog, public authService: AuthService, public apiService: ApiService) {
        if (this.authService.isLogedIn()) {
            this.initializeClient();
        } else {
            console.log('mistake happened');
        }
    }

    ngOnInit(): void {
    }

    initializeAnimal(clientId: number) {
        let params: Filter = { 'clientId': clientId.toString() };

        this.apiService.getEntity('animals', params).subscribe((data: PageResponse) => {
            this.animals = data.data; 
    }) 
    }

  

  initializeClient()
  {
    let id: string = this.authService.userData.sub;
    let filter: Filter = {"UserId": id};
    this.apiService.getEntity("clients", filter).subscribe((response) =>
      {
        this.client = response.data[0];  
        this.initializeAnimal(response.data[0].id)      
      },
      error =>
      console.log("error : " + error));    
  }  
  
    notActiveAnimal(active: any) {
        this.activeAnimal = active;
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(AddAnimalComponent, {
            width: '250px',
            data: this.animalData
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === null || result === undefined) {
                return;
            }            
            this.animals.push(result);
        });
    }
}
