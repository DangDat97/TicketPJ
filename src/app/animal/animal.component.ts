import { Component } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  animals: any;
  constructor( private animal:ApiServicesService) {}
  ngOnInit() {
    this.animal.getAnimal().subscribe(data =>{
      this.animals = data;
      console.log(this.animals);
    })
  }
}
