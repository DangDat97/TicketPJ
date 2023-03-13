import { Component } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  events:any;
  constructor(private event:ApiServicesService) {}
  ngOnInit(){
    this.event.getEvent().subscribe(data =>{
      this.events=data;
      console.log(data)
    })
  }
}
