import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/service/movie.service';
import { Movie } from 'src/app/shared/model/Movie';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/shared/model/Actor';
import { ActorService } from 'src/app/shared/service/actor.service';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  movie: Movie;
  actorsList: Actor[];
  id: number;

  movieForm: FormGroup;

  form: FormGroup;


  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private actorService: ActorService,
    private fb: FormBuilder) {

      //Get the id parameter
      this.route.params
      .subscribe(params => this.id = params.id);

      this.form = this.fb.group({
        actor: this.fb.array([])
      })
  }

  ngOnInit(): void {
    this.getMovieDetail(this.id);
    this.getActors();
 }

  // Get the movie
  getMovieDetail(id: number) {
    this.movieService.getMovieDetail(id)
    .subscribe( data => {
      this.movie = data;
    });
  }

  getActors(){
    this.actorService.getActors()
    .subscribe(data => {
      this.actorsList = data;
    });
  }
  onCheckboxChange(e) {
    const actor: FormArray = this.form.get('actor') as FormArray;
  
    if (e.target.checked) {
      actor.push(new FormControl(e.target.value));
    } else {
       const index = actor.controls.findIndex(x => x.value === e.target.value);
       actor.removeAt(index);
    }
  }
  submit(){
    this.movieService.addActor(this.form.value.actor, this.id)
    .subscribe(data => console.log(data))
  }
}