import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditRessourceHumaineComponent } from './adminedit-ressource-humaine.component';

describe('AdmineditRessourceHumaineComponent', () => {
  let component: AdmineditRessourceHumaineComponent;
  let fixture: ComponentFixture<AdmineditRessourceHumaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditRessourceHumaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditRessourceHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
