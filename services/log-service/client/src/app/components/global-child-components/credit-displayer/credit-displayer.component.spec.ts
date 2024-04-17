import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDisplayerComponent } from './credit-displayer.component';

describe('CreditDisplayerComponent', () => {
  let component: CreditDisplayerComponent;
  let fixture: ComponentFixture<CreditDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditDisplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
