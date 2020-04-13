import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/shared/service/actor.service';

@Component({
  selector: 'app-actress-best',
  templateUrl: './actress-best.component.html',
  styleUrls: ['./actress-best.component.css']
})
export class ActressBestComponent implements OnInit {
  actors: [];
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.actorService.getCount()
    .subscribe(data => this.actors = data.filter(actor => actor.Actor.Gender.name === 'Femme'));
  }
}
