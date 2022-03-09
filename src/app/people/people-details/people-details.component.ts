import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/_models/people';
import { PeopleService } from 'src/app/_services/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  @Input() person: People = <People>{};
  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPersonByName(this.route.snapshot.params['name']).subscribe(
      person => this.person = person
    )
  }

}
