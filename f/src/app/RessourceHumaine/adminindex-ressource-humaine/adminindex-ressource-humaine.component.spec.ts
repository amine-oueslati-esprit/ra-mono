import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexRessourceHumaineComponent } from './adminindex-ressource-humaine.component';

describe('AdminindexRessourceHumaineComponent', () => {
  let component: AdminindexRessourceHumaineComponent;
  let fixture: ComponentFixture<AdminindexRessourceHumaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexRessourceHumaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexRessourceHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
