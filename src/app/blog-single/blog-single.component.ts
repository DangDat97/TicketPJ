import { Component } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent {
  blogs:any={};
  id:number=0;
  constructor(private blog:ApiServicesService,private route:ActivatedRoute, private http:HttpClient,private fb:FormBuilder) {
  }
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.blog.getBlogID(params['id']).subscribe(data=>{
        this.blogs=data;
        console.log(this.blogs)
      })
    })
  }
}
