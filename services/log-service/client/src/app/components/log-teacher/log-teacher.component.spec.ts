import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTeacherComponent } from './log-teacher.component';

describe('LogTeacherComponent', () => {
  let component: LogTeacherComponent;
  let fixture: ComponentFixture<LogTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
