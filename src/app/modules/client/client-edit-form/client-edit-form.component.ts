import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service' 
import { EmailService} from 'src/app/services/email.service' 
import { Client } from 'src/app/models/client/client';
import { Filter } from 'src/app/models/queries/filter';
@Component({
  selector: 'app-client-edit-form',
  templateUrl: './client-edit-form.component.html',
  styleUrls: ['./client-edit-form.component.css']
})
export class ClientEditFormComponent implements OnInit {

  client!: Client;
  id!: string;
  clientForm: FormGroup = new FormGroup({
    
    firstName: new FormControl('',
    [
      Validators.required, Validators.maxLength(30)
    ]
    ),
    lastName: new FormControl('',[
      Validators.required, Validators.maxLength(30)
    ]),
    email: new FormControl('',[
      Validators.required, Validators.maxLength(50), Validators.email
    ]),
    phoneNumber: new FormControl('',[
      Validators.required, Validators.pattern("^[0-9]{12}$")
    ]),
    password: new FormControl('',[
      Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    ]),
    })
    constructor(public apiService: ApiService, public http: HttpClient, public authService: AuthService,
      public clientService: ClientService, private emailService: EmailService) {   
        this.initializeClient();        
     }
  
    ngOnInit(): void {  
  }
  
    isControlInvalid(controlName: string): boolean {
      const control = this.clientForm.controls[controlName];
      
      const result = control.invalid && control.touched;
      
      return result;
  }
  
   onSubmit() {
    const controls = this.clientForm.controls;
     if (this.clientForm.invalid) {
      alert("invalid");
      Object.keys(controls)
       .forEach(controlName => controls[controlName].markAsTouched());
            return;
      }   
      else {
        alert("input successful")
        this.edit();
      }
     
    }
  
    edit()
    {
      let editedClient ={
        "userName": this.client.userName,
        "firstName": this.clientForm.value.firstName,
        "lastName": this.clientForm.value.lastName,
        "email": this.clientForm.value.email,
        "phoneNumber": this.clientForm.value.phoneNumber,
        "password": this.clientForm.value.password,
        "userId" : this.id
      }
      this.apiService.updateEntity('clients', this.client.id, editedClient).subscribe(
        () => {
          this.clientService.clientCabinetEnter();   
        }
      );
    }
  
    cancel()
    {
      console.log("cancelled");
      this.clientService.clientCabinetEnter();
    }

    initializeClient()
  {
    this.id = this.authService.userData.sub;
    let filter: Filter = {"UserId": this.id};
    this.apiService.getEntity("clients", filter).subscribe((response) =>
      {
        this.client = response.data[0];
        this.fillForm();
      },
      error =>
      console.log("error : " + error));    
  }

  fillForm()
  {    
    this.clientForm.patchValue({
       firstName:   this.client.firstName,
       lastName:    this.client.lastName,
       email:       this.client.email,
       phoneNumber: this.client.phoneNumber,
    }); 
  }
}
