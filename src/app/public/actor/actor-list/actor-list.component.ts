import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/shared/service/actor.service';
import { Actor } from 'src/app/shared/model/Actor';
import { CountryService } from 'src/app/shared/service/country.service';
import { Country } from 'src/app/shared/model/Country';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Actor[];
  countries: Country[];
  actorsInit: Actor[];

  constructor(private actorService: ActorService, private countryService: CountryService) { }

  ngOnInit(): void {
    this.getActors();
    this.getCountries();
  }

  getActors(){
    this.actorService.getActors()
    .subscribe(data => {
      this.actors = data;
      this.actorsInit = data;
    });
  }

  getCountries(){
    this.countryService.getCountries()
    .subscribe(data => this.countries = data);
    
  }

  onItemChange(item: any)
  {
    if(item === 'All') {
      this.actors = this.actorsInit;
    }
    else {
      let actors = this.actorsInit;
      actors = actors.filter(actor => actor.Country.name === item);
    }
  }

}
