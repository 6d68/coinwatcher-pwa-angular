import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { WatchlistService } from '../../services/watchlist.service';
import { CurrencyInfo } from '../../model/currencyInfo.model';

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})

export class WatchlistComponent implements OnInit {
  currencies: CurrencyInfo[] = [];

  constructor(private watchlistService: WatchlistService, private router: Router) {
  }

  ngOnInit() {
    this.watchlistService.getListener().subscribe(data => {
      this.refreshWatchlist();
    });

    this.refreshWatchlist();
  }

  refresh() {
    this.watchlistService.refresh();
  }

  deleteFromWatchList(currencyInfo: CurrencyInfo) {
    this.watchlistService.remove(currencyInfo);
  }

  openCurrencyFinder() {
    this.router.navigate(['/currencyFinder'])
  }

  private refreshWatchlist() {
    this.watchlistService.getWatchlist().then(result => {
      this.currencies = result;
    }, error => {
      console.error(error);
    });
  }
}
 