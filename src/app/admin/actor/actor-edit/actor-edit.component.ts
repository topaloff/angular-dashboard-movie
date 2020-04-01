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
  id: string;
  file: File;
  avatar: string;

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
    private datePipe: DatePipe,
  ) {
    this.route.params
    .subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getActorDetail(this.id);
    this.getCountries();
    this.getGenders();
  }

  // Get the actor
  getActorDetail(id: string) {
    this.actorService.getActorDetail(id)
    .subscribe( data => {
      console.log(data);
      this.actorForm.patchValue({
            name: data.name,
            firstname: data.firstname,
            birth: this.datePipe.transform(data.birth, 'yyyy-MM-dd'),
            CountryId: data.CountryId,
            GenderId: data.GenderId,
      });
      this.avatar = data.picture;
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

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.actorForm.get('name').value);
    formData.append('firstname', this.actorForm.get('firstname').value);
    formData.append('birth', this.actorForm.get('birth').value);
    formData.append('CountryId', this.actorForm.get('CountryId').value);
    formData.append('GenderId', this.actorForm.get('GenderId').value);
    if(this.file != undefined)
    {
      formData.append('picture', this.file, this.file.name);
    }

    this.actorService.editActor(formData, this.id)
        .subscribe(actor => {
          this.router.navigate(['/admin/actor']);
        });
    }
}