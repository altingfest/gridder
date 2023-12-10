import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'gr-dropable-box',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './dropable-box.component.html',
  styleUrl: './dropable-box.component.scss'
})
export class DropableBoxComponent implements OnChanges {
  private _src: string = '';
  @Input({ required: true }) width: string = "100px";
  @Input({ required: true }) height: string = "";
  @Input({ required: true }) id: string = "";
  // @Input({ required: true }) src: string = "";
  @Output() onLockChange = new EventEmitter<{
    id: string,
    isLocked: boolean,
  }>();
  public isOnDragOver: boolean = false;
  public isDropped: boolean = false;
  public isMouseOver: boolean = false;
  public isLocked: boolean = false;
  public lockerIcon: string = 'lock_open';

  @Input()
  set src(value: string) {
    if (this.isLocked !== true) {
      this._src = value;
    }
  }

  get src(): string {
    return this._src;
  }

  onDragLeave(event: DragEvent) {
    this.isOnDragOver = false;
    this.isDropped = this.src ? true : false;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isOnDragOver = true;
    this.isDropped = false;
  }

  onDrop(event: DragEvent) {
    if (event.dataTransfer) {
      this.src = event.dataTransfer.getData('text');
    }

    this.isOnDragOver = false;
    this.isDropped = true;
    this.isLocked = false;
  }

  get imageUrl() {
    return `url('${this.src}')`;
  }

  @HostListener('mouseenter')
  onMouseOver() {
    this.isMouseOver = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isMouseOver = false;
  }

  onLockOver() {
    this.lockerIcon = this.isLocked ? 'lock_open' : 'lock';
  }
  onLockLeave() {
    this.lockerIcon = this.isLocked ? 'lock': 'lock_open';
  }

  onLockClick() {
    this.isLocked = !this.isLocked;
    this.lockerIcon = this.isLocked ? 'lock': 'lock_open';
    this.onLockChange.emit({
      id: this.id,
      isLocked: this.isLocked,
    });
  }

  onClear() {
    this.isDropped = false;
    this.src = '';
    this.isLocked = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['src'] && changes['src'].currentValue) {
      this.isOnDragOver = false;
      this.isDropped = true;
    }
  }

}
