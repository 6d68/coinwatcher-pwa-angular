import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Currency } from '../model/currency.model';
import { CurrencyInfo } from '../model/currencyInfo.model';
import { environment } from '../../environments/environment'

@Injectable()
export class CurrencyService {
  private apiRoot: string = environment.API_URL;
  private key: string = environment.API_KEY;

  constructor(private http: Http) { }

  search(term: string): any {
    var headers = this.createHeaders();;
    let apiURL = `${this.apiRoot}/prod/currencies/search/?keyword=${term}`;
    
    return this.http.get(apiURL, { headers }).map(this.extractResponse).catch(this.handleError)
  }

  findCurrencyInfos(currenyIds: string[]): Promise<CurrencyInfo[]> {
    var headers = this.createHeaders();
    let idList = currenyIds.join(';');
    let apiURL = `${this.apiRoot}/prod/currencies/${idList}`;

    return this.http.get(apiURL, { headers })
      .toPromise()
      .then(response => response.json() as CurrencyInfo[])
      .catch(this.handleError)
  }

  private createHeaders(): Headers {
    var headers = new Headers();
    headers.set('x-api-key', this.key);
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    return headers;
  }

  private extractResponse(res: Response) {
    return <Currency[]>res.json();
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || 'Server Error');
  }
}
