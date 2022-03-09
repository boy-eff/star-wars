import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeopleDto } from '../dto/peopleDto';
import { map, Observable, tap } from 'rxjs';
import { People } from '../_models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  baseUrl: string = "https://swapi.dev/api/people";
  constructor(public http: HttpClient) { }

  getPeople(): Observable<PeopleDto>{
    return this.http.get<PeopleDto>(this.baseUrl)
  }

  getPersonByName(name: string): Observable<People | undefined>{
    return this.http.get<PeopleDto>(this.baseUrl).pipe(
      map(people => people.results),
      map(people => people.find(person => person.name === name)),
      tap(person => console.log(person))
    )
  }
}
