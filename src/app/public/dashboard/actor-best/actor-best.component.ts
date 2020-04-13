import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/shared/service/actor.service';

@Component({
  selector: 'app-actor-best',
  templateUrl: './actor-best.component.html',
  styleUrls: ['./actor-best.component.css']
})
export class ActorBestComponent implements OnInit {
  actors: [];
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.actorService.getCount()
    .subscribe(data => this.actors = data.filter(actor => actor.Actor.Gender.name === 'Homme'));
  }
}