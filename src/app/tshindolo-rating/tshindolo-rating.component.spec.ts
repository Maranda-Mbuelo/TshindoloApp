import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshindoloRatingComponent } from './tshindolo-rating.component';

describe('TshindoloRatingComponent', () => {
  let component: TshindoloRatingComponent;
  let fixture: ComponentFixture<TshindoloRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TshindoloRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TshindoloRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
