import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/shared/model/Actor';
import { ActorService } from 'src/app/shared/service/actor.service';

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

  deleteActor(id) {
    this.actorService.deleteActor(id).subscribe();
    this.actors = this.actors.filter(element => element.id !== id);
  }
}