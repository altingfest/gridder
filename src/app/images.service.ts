import { Injectable } from '@angular/core';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private images: {[id: string]: Image} = {};
  constructor() { }

  public add(image: Image): void {
    this.images[image.id] = image;
  }

  public getById(id: number): Image|null {
    return this.images[id] || null;
  }

  public getAll(): Image[] {
    return Object.values<Image>(this.images);
  }

  public getShuffled(count: number): Image[] {
    const result: Image[] = [];
    const keys = Object.keys(this.images);
    let length = keys.length;
    let swap: string;


    for (let i = 0; i < count && length > 0; i++) {
      const randIndex = Math.floor(Math.random() * length);
      swap = keys[randIndex];
      keys[randIndex] = keys[length - 1];
      keys[length - 1] = swap;
      result.push(this.images[swap]);
      --length;
    }

    return result;
  }
}
