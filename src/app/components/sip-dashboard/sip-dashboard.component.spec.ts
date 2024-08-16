import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipDashboardComponent } from './sip-dashboard.component';

describe('SipDashboardComponent', () => {
  let component: SipDashboardComponent;
  let fixture: ComponentFixture<SipDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SipDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
