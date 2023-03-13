import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isMenuOpened1:boolean =false;
  isMenuOpened2:boolean =false;
  isMenuOpened3:boolean =false;
  toggleMenu1():void{
    this.isMenuOpened1=!this.isMenuOpened1;
  }
  toggleMenu2():void{
    this.isMenuOpened2=!this.isMenuOpened2;
  }
  toggleMenu3():void{
    this.isMenuOpened3=!this.isMenuOpened3;
  }
  clickedOutside1():void{
    this.isMenuOpened1=false;
  }
  clickedOutside2():void{
    this.isMenuOpened2=false;
  }
  clickedOutside3():void{
    this.isMenuOpened3=false;
  }
}
