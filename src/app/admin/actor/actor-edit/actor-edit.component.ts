import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/shared/service/actor.service';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CountryService } from 'src/app/shared/service/country.service';
import { Country } from 'src/app/shared/model/Country';
import { Gender } from 'src/app/shared/model/Gender';
import { GenderService } from 'src/app/shared/service/gender.service';
import { HttpClient } from '@angular/common/http';

import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {

  countries: Country[];
  genders: Gender[];
  id: number;
  selectedGender: number;

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
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private datePipe: DatePipe,
    private fb: FormBuilder
  ) {
    this.route.params
    .subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getCountries();
    this.getGenders();
    this.getActorDetail(this.id);
    this.actorForm = this.fb.group({
      name: new FormControl(),
      firstname: new FormControl(),
      birth: new FormControl(),
      picture: new FormControl(),
      CountryId: new FormControl(),
      GenderId: new FormControl(1)
    });
  }

  // Get the actor
  getActorDetail(id: number) {
    this.actorService.getActorDetail(id)
    .subscribe( data => {
      console.log(data);
      this.actorForm.patchValue({
            name: data.name,
            firstname: data.firstname,
            birth: this.datePipe.transform(data.birth, 'yyyy-MM-dd'),
            picture: data.picture,
            CountryId: data.CountryId,
            GenderId: data.GenderId
      });
    });
  }

  getCountries(){
    this.countryService.getCountries()
    .subscribe(data => this.countries = data);
  }

  getGenders(){
    this.genderService.getGenders()
    .subscribe(data => this.genders = data);
  }


  onSubmit() {
    this.actorService.editActor(this.actorForm.value, this.id)
        .subscribe(actor => {
          this.router.navigate(['/admin/actor']);
        });
    }
}