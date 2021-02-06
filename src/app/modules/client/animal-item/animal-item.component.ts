import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Animal } from 'src/app/models/doctor/animal';
import { ApiService } from 'src/app/services/api.service';
import { AssessDialogComponent } from 'src/app/shared/components/dialogs/assess-dialog/assess-dialog.component';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css'],
  animations: [    

    trigger('active', [      
      state('active', style({ 
        backgroundColor: '#8abc00'
      })),         
      transition('active <=> *', [
        animate('0.5s ease-out')
      ]),      
    ]),    
  ]
})
export class AnimalItemComponent implements OnInit {

  @Input() animal!:Animal;    
  closedInformation:boolean =true;
  @Input() activeAnimal!: boolean; 
  @Output() activeAnimalid=new EventEmitter<number|null>();
  @Output() changedAnimal=new EventEmitter<Animal>();
  created:boolean=false;
  
  constructor(public dialog: MatDialog,
    private apiService: ApiService) { }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {       
}

selectAnimal(){
  if(!this.activeAnimal){
    this.activeAnimal=!this.activeAnimal;
    this.activeAnimalid.emit(this.animal.id) 
  }
    else{
      this.activeAnimal=!this.activeAnimal;
      this.activeAnimalid.emit(null)
    }
  }

goToSettings(){}

deleteAnimal(){   
  this.animal.isDeleted=true;
  let id:number=this.animal.id!=null? this.animal.id:0;
  this.apiService.updateEntity("animals",id,this.animal).subscribe(
    ()=>this.changedAnimal.emit(this.animal)
  );  
   
}


openAssessDialog() {
    const dialogRef = this.dialog.open(AssessDialogComponent,{
      data: "Do you really want to remove this animal?"
     });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteAnimal();
      }
    });
  }

}