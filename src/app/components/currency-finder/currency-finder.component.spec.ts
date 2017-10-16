import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFinderComponent } from './currency-finder.component';

import { MaterialModule } from '../material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule }               from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyService } from '../services/currency.service';
import { WatchlistService } from '../services/watchlist.service';

describe('CurrencyFinderComponent', () => {
  let component: CurrencyFinderComponent;
  let fixture: ComponentFixture<CurrencyFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule
        ],
      declarations: [CurrencyFinderComponent],
      providers: [
        { provide: CurrencyService },
        { provide: WatchlistService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
