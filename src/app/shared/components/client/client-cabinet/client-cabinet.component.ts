import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/queries/filter';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client-cabinet',
  templateUrl: './client-cabinet.component.html',
  styleUrls: ['./client-cabinet.component.css']
})
export class ClientCabinetComponent implements OnInit {

  client: any = {
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

  initializeClient()
  {
    let id: string = this.authService.userData.sub;
    let filter: Filter = {"UserId": id};
    this.apiService.getEntity("Client", filter).subscribe(response =>
      {
        this.client = response[0];
      },
      error =>
      console.log("error : " + error));
    
  }

}
