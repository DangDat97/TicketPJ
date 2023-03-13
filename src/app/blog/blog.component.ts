import { Component } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs:any;
  constructor(private GetAPI:ApiServicesService) {}
  ngOnInit(){
    this.GetAPI.getBlog().subscribe(data =>{
      this.blogs=data;
      console.log(data)
    })
  }
}
