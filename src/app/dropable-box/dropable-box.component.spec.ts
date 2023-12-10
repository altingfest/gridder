import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropableBoxComponent } from './dropable-box.component';

describe('DropableBoxComponent', () => {
  let component: DropableBoxComponent;
  let fixture: ComponentFixture<DropableBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropableBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
