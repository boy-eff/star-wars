import { Component, OnInit } from '@angular/core';
import { PeopleDto } from './dto/peopleDto';
import { People } from './_models/people';
import { PeopleService } from './_services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task2';

  constructor(private peopleService: PeopleService) {
    
  }
  
  ngOnInit(): void {
  
  }
}
