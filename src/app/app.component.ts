import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GridFilesComponent } from './grid-files/grid-files.component';
import { GridComponent } from './grid/grid.component';
import { MatDividerModule } from '@angular/material/divider';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GridFilesComponent,
    GridComponent,
    MatDividerModule,
    LogoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grider';
}
