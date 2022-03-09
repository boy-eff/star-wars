import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PeopleDto } from 'src/app/dto/peopleDto';
import { People } from 'src/app/_models/people';
import { PeopleService } from 'src/app/_services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: People[] = [];
  
  constructor(private http: HttpClient, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(
      (people: PeopleDto) => this.people = people.results
    );
  }
}
