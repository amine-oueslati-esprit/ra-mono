import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininscriptionComponent } from './admininscription.component';

describe('AdmininscriptionComponent', () => {
  let component: AdmininscriptionComponent;
  let fixture: ComponentFixture<AdmininscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmininscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmininscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
