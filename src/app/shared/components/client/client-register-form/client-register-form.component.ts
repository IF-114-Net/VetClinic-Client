import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service' 

@Component({
  selector: 'app-client-register-form',
  templateUrl: './client-register-form.component.html',
  styleUrls: ['./client-register-form.component.css']
})
export class ClientRegisterFormComponent implements OnInit {
  clientForm: FormGroup = new FormGroup({
  userName: new FormControl('', 
  [
    Validators.required, Validators.maxLength(30)
  ]
  ),
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
    public clientService: ClientService) {
    // let id = this.authService.userData.sub;  
    // //this.authService.userData.sub;
    // console.log("id: " + id);    
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
    Object.keys(controls)
     .forEach(controlName => controls[controlName].markAsTouched());
          return;
    }
   
    else {
      console.log("input successful");
      this.register();
    }
   
  }


  register()
  {
    let client ={
      "userName": this.clientForm.value.userName,
      "firstName": this.clientForm.value.firstName,
      "lastName": this.clientForm.value.lastName,
      "email": this.clientForm.value.email,
      "phoneNumber": this.clientForm.value.phoneNumber,
      "password": this.clientForm.value.password,
    }
    this.apiService.addEntity('Client', client).subscribe(response =>
      {
        console.log(client);
        alert('Registration is successful');
        this.clientService.mainAppPage();
      },
      error => {
        console.log(client);
        console.log(error);
    }
      );
    
  }

  cancel()
  {
    console.log("cancelled");
    this.clientService.mainAppPage();
  }

}
