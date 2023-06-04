import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesserviceService {

  tag: string = '/assets/images/';
  counter = 0;

  constructor() { }

  getAllPictures(): string[]{
    const pictures: string[] = [];

    for(let i = 1; i <= 64; i++){
      const pictureUrl = `${this.tag}Tshindolo_${i}.jpg`;

      if(pictureUrl == `${this.tag}Tshindolo_${i*0+4}.jpg` 
      || pictureUrl == `${this.tag}Tshindolo_${i*0+5}.jpg`
      || pictureUrl == `${this.tag}Tshindolo_${i*0+7}.jpg`
      || pictureUrl == `${this.tag}Tshindolo_${i*0+8}.jpg`
      || pictureUrl == `${this.tag}Tshindolo_${i*0+5}.jpg`){
        console.log(`bugger`);
      }else{
        pictures.push(pictureUrl);
      }
    }
    
    // pictures.forEach((element) => {
    //   if(element.endsWith(`Tshindolo_${4}.jpg`)){
    //     pictures;
    //   }
    // })

    return pictures;
  }
  
}

/*
  pictureUrl == `${this.tag}Tshindolo_${i*0+4}.jpg` 
      || pictureUrl == `${this.tag}Tshindolo_${i*0+5}.jpg`
      || pictureUrl == `${this.tag}Tshindolo_${i*0+7}.jpg`
      || pictureUrl == `${this.tag}Tshindolo_${i*0+8}.jpg`
      || pictureUrl == `${this.tag}Tshindolo_${i*0+5}.jpg`
*/