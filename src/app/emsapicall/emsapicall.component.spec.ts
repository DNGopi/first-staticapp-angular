import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsapicallComponent } from './emsapicall.component';

describe('EmsapicallComponent', () => {
  let component: EmsapicallComponent;
  let fixture: ComponentFixture<EmsapicallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsapicallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsapicallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
