import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeopleDetailsComponent } from './people/people-details/people-details.component';
import { PeopleListComponent } from './people/people-list/people-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleListComponent},
  {path: 'people/:name', component: PeopleDetailsComponent},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
