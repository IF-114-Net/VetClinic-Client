import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Position } from 'src/app/models/doctor/position';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

doctorForm:FormGroup=new FormGroup({
    userName: new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30)
    ]),
    password: new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
      this.passwordValidator(),
    ]),
    repeatedPassword: new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30)
    ]),
    firstName: new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30)
    ]),
    lastName:new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30)
    ]),
    email:new FormControl('', [      
      Validators.minLength(4),
      Validators.maxLength(30)
    ]),
    phoneNumber:new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12),
      this.notNumberValidator()
    ]),
    positionId:new FormControl('',
    [
      Validators.required
    ]),
    education:new FormControl('',[      
      Validators.maxLength(100)
    ]),
    biography:new FormControl('',[      
      Validators.maxLength(200)
    ]),
    experience:new FormControl('',[
      Validators.maxLength(100)
    ]),
    photo:new FormControl('',),
  }); 

  mainInformationCreated:boolean=false;
  positions!:Position[];

  constructor(private apiService:ApiService,
    public authService: AuthService,   
    private router:Router, 
    ) { }

  ngOnInit(): void {  
      this.apiService.getEntity('position').subscribe((data: Position[])=>{
    this.positions=data;    
    });    
  }

  continue(){
    this.mainInformationCreated=!this.mainInformationCreated;
  }

  notNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
    let accountRgEx: RegExp = /^[0-9]+(\.?[0-9]+)?$/
    let valid =
      !control.value || accountRgEx.test(control.value)
    return valid ? null : { notNumber: true };
    }
  } 

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
    let numberRgEx: RegExp = /[1-9]/;
    let charRgEx: RegExp = /[a-z]/;
    let charUppercaseRgEx: RegExp = /[A-Z]/;
    let simbolRgEx: RegExp = /\$|\#|\@/;
    let valid =
      !control.value || (numberRgEx.test(control.value)
      && charRgEx.test(control.value)
      && simbolRgEx.test(control.value)
      && charUppercaseRgEx.test(control.value))
    return valid ? null : { invalidPassword: true };
    }
  } 
  
  createProfile() { 
    let doctor={
      "biography":this.doctorForm.value.biography,
      "education":this.doctorForm.value.education,
      "experience":this.doctorForm.value.experience,
      "photo":this.doctorForm.value.biography,
      "positionId":this.doctorForm.value.positionId,
      "user":{
        "userName":this.doctorForm.value.userName,
        "firstName":this.doctorForm.value.firstName,
        "lastName":this.doctorForm.value.lastName,
        "phoneNumber":this.doctorForm.value.phoneNumber,
        "email":this.doctorForm.value.email,
        "password":this.doctorForm.value.password,
      }  
    }  
    this.apiService.addEntity('doctor',doctor).subscribe(data=>console.log(data),
    error => console.error('oops', error));
    alert(`Doctor created ,${doctor.user.userName},${doctor.user.password}`)   ;
   this.router.navigate(["doctor/list"]) ;   
  }

  cancel(){    
    this.router.navigate(["doctor/list"]) ;
  }

}
