import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsproductComponent } from './emsproduct.component';

describe('EmsproductComponent', () => {
  let component: EmsproductComponent;
  let fixture: ComponentFixture<EmsproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
