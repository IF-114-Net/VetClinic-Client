import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/doctor/animal';
import { AnimalType } from 'src/app/models/doctor/animalType';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css']
})
export class AnimalItemComponent implements OnInit {

  @Input() animal!:Animal;
  @Input() animalType!:AnimalType;  
  closedInformation:boolean =true;
  @Input() activeAnimal!: boolean; 
  @Output() activeAnimalid=new EventEmitter<number|null>();
  
  constructor( ) { }

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




