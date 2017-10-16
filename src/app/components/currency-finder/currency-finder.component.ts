import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';
import { WatchlistService } from '../../services/watchlist.service';
import { Currency } from '../../model/currency.model';
import { CurrencyInfo } from '../../model/currencyInfo.model';

import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-currency-finder',
    templateUrl: './currency-finder.component.html',
    styleUrls: ['./currency-finder.component.css']
})

export class CurrencyFinderComponent {
    @ViewChild('currencyOptions') currencyOptions;

    selectedCurrencies: Currency[] = [];
    currencies: Currency[]

    term: FormControl = new FormControl();
    constructor(
        private currencyService: CurrencyService,
        private watchlistService: WatchlistService,
        private router: Router) {

        this.term.valueChanges
            .debounceTime(400)
            .filter(term => term.length > 2)
            .distinctUntilChanged()
            .switchMap(term => currencyService.search(term))
            .subscribe((results: Currency[]) => {
                this.currencies = results;
            });;
    }

    selectCurrency(currency: Currency): void {
        if (this.selectedCurrencies.indexOf(currency) !== -1) {
            this.selectedCurrencies.splice(this.selectedCurrencies.indexOf(currency), 1);
        } else {
            this.selectedCurrencies.push(currency);
        }
    }

    addToWatchlist(): void {
        this.watchlistService.add(this.selectedCurrencies.map(_ => _.id));

        // reset temp state
        this.selectedCurrencies = []
        this.currencies = null;
        this.currencyOptions.selectedOptions.selected.forEach(element => {
            element.toggle();
        });
        this.term.setValue('');

        this.goHome();
    }

    goHome() {
        this.router.navigate([''])
    }
}
