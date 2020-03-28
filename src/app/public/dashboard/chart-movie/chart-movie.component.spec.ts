import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMovieComponent } from './chart-movie.component';

describe('ChartMovieComponent', () => {
  let component: ChartMovieComponent;
  let fixture: ComponentFixture<ChartMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
