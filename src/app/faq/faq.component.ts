import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  isMenuOpened1:boolean =false;
  isMenuOpened2:boolean =false;
  isMenuOpened3:boolean =false;
  isMenuOpened4:boolean =false;
  isMenuOpened5:boolean =false;
  isMenuOpened6:boolean =false;
  isMenuOpened7:boolean =false;
  isMenuOpened8:boolean =false;
 toggleMenu1():void{
   this.isMenuOpened1=!this.isMenuOpened1;
 }
 toggleMenu2():void{
   this.isMenuOpened2=!this.isMenuOpened2;
 }
 toggleMenu3():void{
   this.isMenuOpened3=!this.isMenuOpened3;
 }
 toggleMenu4():void{
   this.isMenuOpened4=!this.isMenuOpened4;
 }
 toggleMenu5():void{
   this.isMenuOpened5=!this.isMenuOpened5;
 }
 toggleMenu6():void{
   this.isMenuOpened6=!this.isMenuOpened6;
 }
 toggleMenu7():void{
   this.isMenuOpened7=!this.isMenuOpened7;
 }
 toggleMenu8():void{
   this.isMenuOpened8=!this.isMenuOpened8;
 }
 clickedOutside5():void{
   this.isMenuOpened5=false;

 }
 clickedOutside6():void{
   this.isMenuOpened6=false;

 }
 clickedOutside7():void{
   this.isMenuOpened7=false;
 }
 clickedOutside8():void{
   this.isMenuOpened8=false;
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
 clickedOutside4():void{
   this.isMenuOpened4=false;
 }
 err=true;
 updateColor(){
   this.err=!this.err
 }
}
