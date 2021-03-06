import { Component, Input, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import { ApiService} from 'src/app/services/api.service'
import { MaterialModule } from 'src/app/modules/material/material.module'; 
import { Router, ActivatedRoute } from '@angular/router';
import { Procedure } from 'src/app/models/appointments/procedure';
@Component({
  selector: 'app-procedure-edit-form',
  templateUrl: './procedure-edit-form.component.html',
  styleUrls: ['../procedure-form/procedure-form.component.css'],
})
export class ProcedureEditFormComponent implements OnInit {

  procedure?: Procedure;
  procedureForm: FormGroup = new FormGroup({
    
    procedureName: new FormControl('',
    [
      Validators.required, Validators.maxLength(100)
    ]
    ),
    price: new FormControl('',[
      Validators.required, Validators.pattern("^[0-9]*[.]?[0-9]{1,2}$")
    ]),
    description: new FormControl('',[
      Validators.required, Validators.maxLength(3000)
    ])
    })

  constructor(private apiService: ApiService,
     private router: Router) { 
      if(history.state.data){
        this.procedure=history.state.data;
        sessionStorage.setItem('updatedProcedure', JSON.stringify(this.procedure));
      }
      else {
        this.procedure = JSON.parse(sessionStorage.getItem('updatedProcedure') || '{}' );
      }
        this.fillForm();
    }
  
  ngOnInit(): void {
    
  }
  
  
  onSubmit()
  {
    const controls = this.procedureForm.controls;
    if (this.procedureForm.invalid) {
       Object.keys(controls)
       .forEach(controlName => controls[controlName].markAsTouched());
          return;
    }
    else {
       this.updateProcedure();
    }
  }

  cancel()
  {
    this.returnToProceduresMenu();
  }

  returnToProceduresMenu()
  {
    this.router.navigate(['/admin/procedures']);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.procedureForm.controls[controlName];      
    const result = control.invalid && control.touched;      
    return result;
  }

  fillForm()
  {
    this.procedureForm.patchValue({
      procedureName: this.procedure?.procedureName,
      price: this.procedure?.price,
      description: this.procedure?.description
    })
  }

  updateProcedure()
  {
    let procedure = {
      "procedureName": this.procedureForm.value.procedureName,
      "price": this.procedureForm.value.price,
      "description": this.procedureForm.value.description
    };
    let id = this.procedure?.id;
    if(id != null)
      {
        this.apiService.updateEntity("procedures", id, procedure).subscribe(
          () =>
          {
            this.returnToProceduresMenu();
          }
        )
      }
  }


}
