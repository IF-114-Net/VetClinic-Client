import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
import { Procedure } from 'src/app/models/procedures/procedure'

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {

  procedures : Procedure[] | null;

  constructor(private apiService: ApiService ) {
    this.procedures = null;
    this.initializeProcedures();
   }
  ngOnInit(): void {
  }
   
  initializeProcedures()
  {
     this.apiService.getEntity('procedures').subscribe(
       (response) => {
         this.procedures = response.data;
         alert("done");
       }
     )

  }

  deleteProcedure(procedure: Procedure)
  {
    let id = procedure.id;
    this.apiService.deleteEntity('procedures', id).subscribe(
      () =>{
        this.initializeProcedures();
      }
    );
  }

   
  updateProcedures()
  {

  }
}
