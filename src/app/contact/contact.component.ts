import { Component } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private fb:FormBuilder) {
  }
  infoUser=this.fb.group({
    "email":["",[Validators.required,Validators.email]],
    "name":["",[Validators.required]],
    "Subject":["",[Validators.required]],
    "phone":["",[Validators.required]],
    "message":["",[Validators.required]],
  })
  get f(){
    return this.infoUser.controls
  }
  get n(){
    return this.infoUser.controls
  }
  get S(){
    return this.infoUser.controls
  }
  get p(){
    return this.infoUser.controls
  }
  get m(){
    return this.infoUser.controls
  }
  reload(){
    window.location.reload();
  }
  onSubmit(value:any):void{
   console.log(value);
   alert("Thank you! Form submitted successfully. ");
   this.reload()
  }
}
