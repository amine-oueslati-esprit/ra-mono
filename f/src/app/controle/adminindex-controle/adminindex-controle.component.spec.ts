import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexControleComponent } from './adminindex-controle.component';

describe('AdminindexControleComponent', () => {
  let component: AdminindexControleComponent;
  let fixture: ComponentFixture<AdminindexControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
