import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkPicturesComponent } from './park-pictures.component';

describe('ParkPicturesComponent', () => {
  let component: ParkPicturesComponent;
  let fixture: ComponentFixture<ParkPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkPicturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
