import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { CurrencyService } from './services/currency.service';
import { WatchlistService } from './services/watchlist.service';


import { AppComponent } from './app.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { MdIconRegistry } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs'

import { CurrencyFinderComponent } from './components/currency-finder/currency-finder.component';
import { PouchDBService } from "./services/pouchdb.service";

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFinderComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'wachtlist',
        pathMatch: 'full'
      },
      {
        path: 'wachtlist',
        component: WatchlistComponent
      },
      {
        path: 'currencyFinder',
        component: CurrencyFinderComponent
      }
    ])
  ],
  providers: [CurrencyService,WatchlistService, PouchDBService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('coins','cc')

  }
 }
