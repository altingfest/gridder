import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DropableBoxComponent } from '../dropable-box/dropable-box.component';
import { ImagesService } from '../images.service';
import { MatDividerModule } from '@angular/material/divider';

const GRID_COLS = 3;

interface GridItemProps {
  id: string;
  src: string|null;
  isLocked: boolean;
}
@Component({
  selector: 'gr-grid',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, DropableBoxComponent, MatDividerModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  public items: GridItemProps[][] = [];

  constructor(private imagesService: ImagesService) {
  }
  addRow() {
    const rowOrder = this.items.length;
    const row: GridItemProps[] = [];
    for (let i = 0; i < GRID_COLS; i++) {
      const id = rowOrder.toString() + '_' + i.toString();
      row.push({ id, src: null, isLocked: false});
    }
    this.items.push(row);
  }

  shuffle(): void {
    const size = this.items[0].length * this.items.length;

    const images = this.imagesService.getShuffled(size);
    const length = images.length;
    let i = 0;

    for(const row of this.items) {
      for(const item of row) {

        if (i >= length) {
          continue;
        }

        if (item.isLocked) {
          continue;
        }

        item.id = images[i].id;
        item.src = images[i].src;
        i++;
      }
    }
  }

  updateLockState(event: {id: string, isLocked: boolean}) {

  }

  ngOnInit() {
    this.addRow();
  }
}
