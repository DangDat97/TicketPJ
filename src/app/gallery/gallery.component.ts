import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  ChangerImages1(mouseTarget:HTMLElement){
    mouseTarget.style.backgroundImage="url('../../assets/images/Hygrophila Difformis.jpg')"
  }
  ChangerImages2(mouseTarget:HTMLElement){
    mouseTarget.style.backgroundImage="url('../../assets/images/Java Moss.jpg')"
  }
  ChangerImages3(mouseTarget:HTMLElement){
    mouseTarget.style.backgroundImage="url('../../assets/images/Mastigias Aquarium.jpg')"
  }
  ChangerImages4(mouseTarget:HTMLElement){
    mouseTarget.style.backgroundImage="url('../../assets/images/Anubias Nana.jpg')"
  }
  ngOnInit(){
    this.ChangerImages1;
  }

}
