import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpManagementComponent } from './help-management.component';

describe('HelpManagementComponent', () => {
  let component: HelpManagementComponent;
  let fixture: ComponentFixture<HelpManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
