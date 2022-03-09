import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/_models/people';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit {
  @Input() person: People = <People>{};
  constructor() { }

  ngOnInit(): void {
  }

}
