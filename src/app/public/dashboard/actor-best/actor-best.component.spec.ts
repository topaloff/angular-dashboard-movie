import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorBestComponent } from './actor-best.component';

describe('ActorBestComponent', () => {
  let component: ActorBestComponent;
  let fixture: ComponentFixture<ActorBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
