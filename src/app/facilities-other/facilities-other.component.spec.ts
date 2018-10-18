import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesOtherComponent } from './facilities-other.component';

describe('FacilitiesOtherComponent', () => {
  let component: FacilitiesOtherComponent;
  let fixture: ComponentFixture<FacilitiesOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
