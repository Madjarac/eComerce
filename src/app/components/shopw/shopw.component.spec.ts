import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopwComponent } from './shopw.component';

describe('ShopwComponent', () => {
  let component: ShopwComponent;
  let fixture: ComponentFixture<ShopwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
