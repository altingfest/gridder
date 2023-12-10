import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ImagesService } from '../images.service';
import { Image } from '../image';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'gr-grid-files',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatDividerModule
  ],
  templateUrl: './grid-files.component.html',
  styleUrl: './grid-files.component.scss',
})
export class GridFilesComponent {
  public images: Image[] = [];

  // @Input() loadImages: Image;

  constructor(private imageService: ImagesService) {

  }


  onDragStart(event: DragEvent) {
    const el = event.target as HTMLImageElement;

    if(event.dataTransfer) {
      event.dataTransfer.setData('text', el.src);
    }
  }

  onFileSelected() {
    const inputNode: HTMLInputElement = document.querySelector('#filesInput') as HTMLInputElement;

    const files = inputNode.files as FileList;

    if(!(files instanceof FileList) || files.length === 0) {
      // todo: show warning
      console.error('wrong files format');
      return;
    }

    if (typeof (FileReader) === 'undefined') {
      // todo: show warning
      console.error('no reader found');
      return;
    }


    for (let i = 0; i < files.length; i++) {
      const url = URL.createObjectURL(files[i]);

      const image = new Image(url);
      this.images.push(image);
      this.imageService.add(image);
    }
  }
}
