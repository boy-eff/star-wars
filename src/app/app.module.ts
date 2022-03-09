import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http' 
import { PeopleService } from './_services/people.service';
import { PeopleCardComponent } from './people/people-card/people-card.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleDetailsComponent } from './people/people-details/people-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleCardComponent,
    PeopleListComponent,
    PeopleDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
