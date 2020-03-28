import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActorService } from 'src/app/shared/service/actor.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryService } from 'src/app/shared/service/country.service';
import { Country } from 'src/app/shared/model/Country';
import { Gender } from 'src/app/shared/model/Gender';
import { GenderService } from 'src/app/shared/service/gender.service';

@Component({
  selector: 'app-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['./actor-add.component.css']
})
export class ActorAddComponent implements OnInit {

  countries: Country[];
  genders: Gender[];

  actorForm = new FormGroup({
    name: new FormControl(),
    firstname: new FormControl(),
    birth: new FormControl(),
    picture: new FormControl(),
    CountryId: new FormControl(),
    GenderId: new FormControl(),
  });

  constructor(
    private actorService: ActorService,
    private countryService: CountryService,
    private genderService: GenderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCountries();
    this.getGenders();
  }

  getCountries(){
    this.countryService.getCountries()
    .subscribe(data => this.countries = data);
  }

  getGenders(){
    this.genderService.getGenders()
    .subscribe(data => this.genders = data);
  }


  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.actorForm.patchValue({
      picture: file
    });
    this.actorForm.get('picture').updateValueAndValidity()
  }
  
  onSubmit() {
    this.actorService.addActor(this.actorForm.value)
        .subscribe(actor => {
          this.router.navigate(['/admin/actor']);
        });
    }
}