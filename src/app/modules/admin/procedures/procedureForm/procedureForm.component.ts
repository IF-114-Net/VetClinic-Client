import { Component, Input, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ApiService} from 'src/app/services/api.service'
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedureForm.component.html',
  styleUrls: ['./procedureForm.component.css']
})
export class ProcedureFormComponent implements OnInit {
  
  procedureForm: FormGroup = new FormGroup({
    
    procedureName: new FormControl('',
    [
      Validators.required, Validators.maxLength(100)
    ]
    ),
    price: new FormControl('',[
      Validators.required
    ]),
    description: new FormControl('',[
      Validators.required, Validators.maxLength(3000)
    ])
    })

  constructor(private apiService: ApiService, 
    private router: Router) { }
  
  ngOnInit(): void {
  }
  

  createProcedure()
  {
    let procedure = {
      "procedureName": this.procedureForm.value.procedureName,
      "price": this.procedureForm.value.price,
      "description": this.procedureForm.value.description
    };
    this.apiService.addEntity("procedures", procedure).subscribe(
      () =>
      {
        this.returnToProceduresMenu();
      }
    )
  }

  cancel()
  {
    this.returnToProceduresMenu();
  }

  returnToProceduresMenu()
  {
    this.router.navigate(['/admin/procedures']);
  }

}
