import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WathcComponent } from './wathc.component';

describe('WathcComponent', () => {
  let component: WathcComponent;
  let fixture: ComponentFixture<WathcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WathcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WathcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
