import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalSingleComponent } from './animal-single/animal-single.component';
import { EventComponent } from './event/event.component';
import { EventSingleComponent } from './event-single/event-single.component';
import { FaqComponent } from './faq/faq.component';
import { ErrorComponent } from './error/error.component';
import { TicketComponent } from './ticket/ticket.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog-single/:id',component:BlogSingleComponent},
  {path:'services',component:ServicesComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'animal',component:AnimalComponent},
  {path:'animal-single/:id',component:AnimalSingleComponent},
  {path:'event',component:EventComponent},
  {path:'event-single/:id',component:EventSingleComponent},
  {path:'FAQ',component:FaqComponent},
  {path:'ticket',component:TicketComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
