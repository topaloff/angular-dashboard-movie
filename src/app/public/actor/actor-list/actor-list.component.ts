import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/shared/service/actor.service';
import { Actor } from 'src/app/shared/model/Actor';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Actor[];
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.getActors();
  }

  getActors(){
    this.actorService.getActors()
    .subscribe(data => this.actors = data);
  }

}
