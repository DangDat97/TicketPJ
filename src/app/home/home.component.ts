import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

      ChangerImages1(mouseTarget:HTMLElement){
        mouseTarget.style.backgroundImage = "url('../../assets/images/fishes-in-aquarium-e1628654613319.jpg')";
      }
      ChangerImages2(mouseTarget:HTMLElement){
        mouseTarget.style.backgroundImage = "url('../../assets/images/a-fish-in-an-aquarium-e1628654720598.jpg')";
      }
      ChangerImages3(mouseTarget:HTMLElement){
        mouseTarget.style.backgroundImage = "url('../../assets/images/marine-life-in-the-aquarium-e1628654697954.jpg')";
      }
      ChangerImages4(mouseTarget:HTMLElement){
        mouseTarget.style.backgroundImage = "url('../../assets/images/fish-swimming-in-aquarium-e1628654735615.jpg')";
      }
      ngOnInit(){
        this.ChangerImages1;
      }


}
