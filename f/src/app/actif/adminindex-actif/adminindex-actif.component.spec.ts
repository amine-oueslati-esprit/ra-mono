import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexActifComponent } from './adminindex-actif.component';

describe('AdminindexActifComponent', () => {
  let component: AdminindexActifComponent;
  let fixture: ComponentFixture<AdminindexActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
