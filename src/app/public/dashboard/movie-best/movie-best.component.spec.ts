import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBestComponent } from './movie-best.component';

describe('MovieBestComponent', () => {
  let component: MovieBestComponent;
  let fixture: ComponentFixture<MovieBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
