import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gr-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  public isShuffle: boolean = false;
  private interval: number|undefined = undefined;

  ngOnInit() {
    this.interval = setInterval(()=> {
      this.isShuffle = !this.isShuffle;
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
