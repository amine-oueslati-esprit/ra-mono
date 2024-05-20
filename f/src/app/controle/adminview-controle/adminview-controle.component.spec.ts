import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewControleComponent } from './adminview-controle.component';

describe('AdminviewControleComponent', () => {
  let component: AdminviewControleComponent;
  let fixture: ComponentFixture<AdminviewControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
