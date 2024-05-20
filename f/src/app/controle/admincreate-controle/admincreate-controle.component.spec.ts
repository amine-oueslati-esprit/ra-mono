import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateControleComponent } from './admincreate-controle.component';

describe('AdmincreateControleComponent', () => {
  let component: AdmincreateControleComponent;
  let fixture: ComponentFixture<AdmincreateControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
