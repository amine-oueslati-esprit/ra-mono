import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditControleComponent } from './adminedit-controle.component';

describe('AdmineditControleComponent', () => {
  let component: AdmineditControleComponent;
  let fixture: ComponentFixture<AdmineditControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
