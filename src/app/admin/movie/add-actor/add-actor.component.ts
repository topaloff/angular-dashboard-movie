import { FormBuilder, FormGroup, Validators} from '@angular/forms';import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/service/movie.service';
import { Movie } from 'src/app/shared/model/Movie';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/shared/model/Actor';
import { ActorService } from 'src/app/shared/service/actor.service';
import { atLeastOneCheckboxCheckedValidator } from './atLeastOneCheckboxCheckedValidator';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  movie: Movie;
  actors: Actor[];
  actorsSelected: string[] = [];
  id: string;
  form: FormGroup;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private actorService: ActorService,
    private fb: FormBuilder) {
      // Get the id parameter
      this.route.params
      .subscribe(params => this.id = params.id);
  }


  get f() {
    return this.form && this.form.controls;
  }

  get actorsFormGroup(): FormGroup {
    return this.f && this.f.actorsFormGroup as FormGroup;
  }

  get actorsFormGroupSelectedIds(): string[] {
    let ids: string[] = [];
    for (let key in this.actorsFormGroup.controls) {
      if (this.actorsFormGroup.controls[key].value) {
        ids.push(key);
      }
    }
    return ids;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
    this.movieService.getMovieDetail(this.id)
    .subscribe( data => {
      this.movie = data;
      data.Actors.forEach(actor => { this.actorsSelected.push(actor.id); });
      console.log(this.actorsSelected);
      this.actorService.getActors()
      .subscribe(data => {
          this.actors = data;
          this.form.addControl('actorsFormGroup', this.buildActorFormGroup(data, this.actorsSelected));
      });
    });
  }


  buildActorFormGroup(actors: Actor[], selectedActorIds: string[] = []): FormGroup {
    const group = this.fb.group({}, {
      validators: atLeastOneCheckboxCheckedValidator()
    });
    actors.forEach(actor => {
      const isSelected = this.actorsSelected.some(id => id === actor.id);
      group.addControl( actor.id, this.fb.control(isSelected));
    })
    return group;
  }


  submit(){
    console.log(this.actorsFormGroupSelectedIds)
    this.movieService.addActor(this.actorsFormGroupSelectedIds, this.id)
    .subscribe(data => {
      this.router.navigate(['/admin/movie']);
    })
  }
}