import { Component } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-animal-single',
  templateUrl: './animal-single.component.html',
  styleUrls: ['./animal-single.component.css']
})
export class AnimalSingleComponent {
  animals: any={};
  id:number=0;
  constructor( private animal:ApiServicesService,private route:ActivatedRoute, private http:HttpClient ) {}
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.animal.getAnimalID(params['id']).subscribe(data =>{
        this.animals = data;
        console.log(this.animals);
      })
    })
  }
}
