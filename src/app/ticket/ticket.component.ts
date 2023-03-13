import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  events:any;
  eventid:any;
  num:number=0;
  ticket:any={
    name:'',
    price:0,
    timeBegin:'',
    timeEnd:'',
    images:'',
  };
  infoUser=this.fb.group({
    "email":["",[Validators.required,Validators.email]],
    "name":["",[Validators.required]],
    "event":["",[Validators.required]],
    "phone":["",[Validators.required]],
    "num":[0,[Validators.required]],
  })

  constructor(private event:ApiServicesService,private fb:FormBuilder) {}
  ngOnInit(){
    this.event.getEvent().subscribe(data =>{
      this.events=data;
      console.log(data);
    })
  }
  get f(){
    return this.infoUser.controls;
  }

  plushNum(num:number){
    this.num++;
  }
  minusNum(num:number){
    this.num--;
  }
  onSubmit(value:any):void{
    this.event.getEventID(value.event).subscribe(data =>{
      this.eventid=data;
      console.log(data);
      this.ticket.price = this.eventid.price_personal * value.num;
      this.ticket.name = this.eventid.name;
      this.ticket.timeBegin = this.eventid.BEGIN_time;
      this.ticket.timeEnd = this.eventid.END_time;
      this.ticket.images= this.eventid.images;
    })
    alert("Thank you! Form submitted successfully. ");

  }
  reload(){
    window.location.reload();
  }
}
