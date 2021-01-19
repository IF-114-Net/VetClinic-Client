import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { FormGroup ,FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Position } from 'src/app/models/doctor/position';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  
  editDoctorForm:FormGroup=new FormGroup({
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
      Validators.maxLength(15),
      this.notNumberValidator()
    ]),
    positionId:new FormControl('',),
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
  closedInformation!:boolean ;
  doctor!:Doctor;  
  positions!:Position[];
  id!:number;

  constructor(private doctorService:DoctorService,
    private apiService:ApiService,
    private activatedRoute:ActivatedRoute,
    public authService: AuthService,   
    private router:Router, 
    ) { }

  ngOnInit(): void {
    this.doctorService.currDoctor.subscribe(doc=>this.doctor=doc)    
    let id= this.activatedRoute.snapshot.paramMap.get('id') ;
    this.id = id ? parseInt(id) : 0; 
    this.apiService.getEntity('doctor',this.id).subscribe((data: Doctor)=>{
      this.doctor=data; 
      this.fillProfile();  
      this.closedInformationCheck();
      });
      this.apiService.getEntity('position').subscribe((data: Position[])=>{
      this.positions=data;
    })
  }

  notNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
    let accountRgEx: RegExp = /^[0-9]+(\.?[0-9]+)?$/
    let valid =
      !control.value || accountRgEx.test(control.value)
    return valid ? null : { notNumber: true };
  }
  }  
  
  fillProfile(){
    this.editDoctorForm.patchValue({
      firstName: this.doctor.user.firstName,
      lastName: this.doctor.user.lastName,
      email: this.doctor.user.email,
      phoneNumber: this.doctor.user.phoneNumber,
      education: this.doctor.education,
      biography: this.doctor.biography,
      experience: this.doctor.experience,
      photo: this.doctor.photo,
      positionId:this.doctor.positionId,
    }); 
  }

  closedInformationCheck(){
    if(this.authService?.userData)
    {
        if((this.authService?.userData.name==this.doctor?.user?.userName
          || this.authService?.isInRole('admin')))
          {
            this.closedInformation=true;
          }        
    } 
  }

  updateProfile() {
    this.doctor.user.firstName=this.editDoctorForm.value.firstName;
    this.doctor.user.lastName=this.editDoctorForm.value.lastName;
    this.doctor.user.email=this.editDoctorForm.value.email;
    this.doctor.user.phoneNumber=this.editDoctorForm.value.phoneNumber;
    this.doctor.education=this.editDoctorForm.value.education;
    this.doctor.biography=this.editDoctorForm.value.biography;
    this.doctor.experience=this.editDoctorForm.value.experience;
    this.doctor.photo=this.editDoctorForm.value.photo;
    this.doctor.positionId=this.editDoctorForm.value.positionId;   
    
    this.apiService.updateEntity('doctor',this.id,this.doctor).subscribe();
    alert("Changes is saved");
    this.router.navigate(["doctor",this.id]);  
      
  }

  deleteDoctor(){
    let result = confirm(`you really want to remove the doctor ${this.doctor.user.firstName} ${this.doctor.user.lastName}`);  
    if(result)
    {
      this.apiService.deleteEntity("doctor",this.id).subscribe();

      this.router.navigate(["doctor"]) 
    }
  }
}
