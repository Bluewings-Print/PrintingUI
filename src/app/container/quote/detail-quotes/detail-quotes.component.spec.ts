import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQuotesComponent } from './detail-quotes.component';

describe('DetailQuotesComponent', () => {
  let component: DetailQuotesComponent;
  let fixture: ComponentFixture<DetailQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
