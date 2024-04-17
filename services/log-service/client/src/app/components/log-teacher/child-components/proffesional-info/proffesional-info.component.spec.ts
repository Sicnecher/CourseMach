import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesionalInfoComponent } from './proffesional-info.component';

describe('ProffesionalInfoComponent', () => {
  let component: ProffesionalInfoComponent;
  let fixture: ComponentFixture<ProffesionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProffesionalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProffesionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
