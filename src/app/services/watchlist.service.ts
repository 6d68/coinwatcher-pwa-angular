import { Injectable, EventEmitter } from '@angular/core';
import { CurrencyInfo } from '../model/currencyInfo.model';
import { PouchDBService } from './pouchdb.service';
import { CurrencyService } from './currency.service';

@Injectable()
export class WatchlistService {
  private watchlistListener: EventEmitter<any> = new EventEmitter();

  constructor(private database: PouchDBService, private currencyService: CurrencyService) {
    this.database.getChangeListener().subscribe(data => {
      this.watchlistListener.emit();
    });
  }

  refresh(): any {
    return this.getWatchlist().then( 
      infos => this.add(infos.map(_ => _.id)))
  }

  add(currencies: any): void {
    var currencyInfos = []
    let currenciesIds = currencies.map(_ => _).filter((x, i, a) => x && a.indexOf(x) === i);

    this.currencyService.findCurrencyInfos(currenciesIds)
      .then((results) => {
        for (let i = 0; i < results.length; i++) {
          this.database.put(results[i].id, results[i]);
        }
      })
  }

  remove(currencyInfo: CurrencyInfo) {
    this.database.delete(currencyInfo.id);
  }

  getWatchlist(): Promise<CurrencyInfo[]> {
    return this.database.fetch().then(result => {
      var currencies = [];

      for (let i = 0; i < result.rows.length; i++) {
        currencies.push(result.rows[i].doc);
      }

      return currencies;
    }, error => {
      console.error(error);
    });
  }

  getListener(): EventEmitter<any> {
    return this.watchlistListener;
  }
}