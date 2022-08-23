import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationBookComponent } from './recommendation-book.component';

describe('RecommendationBookComponent', () => {
  let component: RecommendationBookComponent;
  let fixture: ComponentFixture<RecommendationBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
