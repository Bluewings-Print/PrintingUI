import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickQuotesComponent } from './quick-quotes.component';

describe('QuickQuotesComponent', () => {
  let component: QuickQuotesComponent;
  let fixture: ComponentFixture<QuickQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
