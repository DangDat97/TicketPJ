import { Component } from '@angular/core';
import { FormGroup , FormBuilder , Validators ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  // registerForm!:FormGroup
  // title = 'formvalidation';
  // submitted = false;
  name: string = 'abc';
  constructor(private fb:FormBuilder){}
  infoUser = this.fb.group({
    "email": ["",[Validators.required,Validators.email]]
  })

  get f(){
    return this.infoUser.controls;
  }
  ngOnInit():void{

  }
  update(){
    this.name = "gia moi"
  }
  onSubmit(){
    console.log(this.infoUser.value);
  }


  // ngOnInit(){
  //   this.registerForm = this.formBuilder.group({
  //     firstname:['',Validators.required]
  //   })
  // }


}
