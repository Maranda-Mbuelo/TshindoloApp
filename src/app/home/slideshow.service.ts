import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  

  private pictures: string[] = [
    '/assets/images/Extreme-off-road-quad-bike.png',
    '/assets/images/texture-mapping-recreation-biome-wolfenstein-3d-minecraft-story-mode.jpg',
    '/assets/images/sinppedMap.png',
    '/assets/images/png-transparent-water-park-recreation-water-park-plane-renderings-photography-3d-amusement-park.png',
    '/assets/images/Extreme-off-road-quad-bike.png'
  ];

  constructor() { }

  getPictures(): string[] {
    return this.pictures;
  }
}
