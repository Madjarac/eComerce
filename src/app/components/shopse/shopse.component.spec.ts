import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopseComponent } from './shopse.component';

describe('ShopseComponent', () => {
  let component: ShopseComponent;
  let fixture: ComponentFixture<ShopseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
