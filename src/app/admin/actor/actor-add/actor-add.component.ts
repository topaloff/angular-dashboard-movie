import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { ActorService } from 'src/app/shared/service/actor.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryService } from 'src/app/shared/service/country.service';
import { Country } from 'src/app/shared/model/Country';
import { Gender } from 'src/app/shared/model/Gender';
import { GenderService } from 'src/app/shared/service/gender.service';
import { Actor } from 'src/app/shared/model/Actor';

@Component({
  selector: 'app-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['./actor-add.component.css']
})
export class ActorAddComponent implements OnInit {

  countries: Country[];
  genders: Gender[];
  file: File;

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

  onFileChanged(event) {
    this.file = event.target.files[0]
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

    this.actorService.addActor(formData)
        .subscribe(actor => {
          this.router.navigate(['/admin/actor']);
        });
    }
}