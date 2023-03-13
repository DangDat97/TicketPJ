import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSingleComponent } from './animal-single.component';

describe('AnimalSingleComponent', () => {
  let component: AnimalSingleComponent;
  let fixture: ComponentFixture<AnimalSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
