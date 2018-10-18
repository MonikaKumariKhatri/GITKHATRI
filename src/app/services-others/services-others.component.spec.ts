import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOthersComponent } from './services-others.component';

describe('ServicesOthersComponent', () => {
  let component: ServicesOthersComponent;
  let fixture: ComponentFixture<ServicesOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
