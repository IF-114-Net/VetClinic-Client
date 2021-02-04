import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/doctor/animal';
import { AnimalType } from 'src/app/models/doctor/animalType';

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
    trigger('create', [ 
      state('void', style({
        transform: 'translateY(-20px)', 
        opacity: 0.5,        
      })),
      transition('void <=> *', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AnimalItemComponent implements OnInit {

  @Input() animal!:Animal;    
  closedInformation:boolean =true;
  @Input() activeAnimal!: boolean; 
  @Output() activeAnimalid=new EventEmitter<number|null>();
  created:boolean=false;
  
  constructor( ) { }

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

}