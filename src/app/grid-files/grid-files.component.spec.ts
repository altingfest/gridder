import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFilesComponent } from './grid-files.component';

describe('GridFilesComponent', () => {
  let component: GridFilesComponent;
  let fixture: ComponentFixture<GridFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
