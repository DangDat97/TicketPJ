import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { EventSingleComponent } from './event-single/event-single.component';
import { AnimalSingleComponent } from './animal-single/animal-single.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { TicketComponent } from './ticket/ticket.component';
import { AnimalComponent } from './animal/animal.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    EventComponent,
    BlogComponent,
    GalleryComponent,
    FaqComponent,
    EventSingleComponent,
    AnimalSingleComponent,
    BlogSingleComponent,
    TicketComponent,
    AnimalComponent,
    ErrorComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
