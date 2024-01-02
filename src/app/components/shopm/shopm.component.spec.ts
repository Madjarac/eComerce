import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmComponent } from './shopm.component';

describe('ShopmComponent', () => {
  let component: ShopmComponent;
  let fixture: ComponentFixture<ShopmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
