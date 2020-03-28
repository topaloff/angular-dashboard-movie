import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActressBestComponent } from './actress-best.component';

describe('ActressBestComponent', () => {
  let component: ActressBestComponent;
  let fixture: ComponentFixture<ActressBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActressBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActressBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
