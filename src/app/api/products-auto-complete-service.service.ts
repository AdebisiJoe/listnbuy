import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StoreService } from './store.service';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { AutoCompleteService } from 'ionic4-auto-complete';

@Injectable({
  providedIn: 'root',
})
export class ProductsAutoCompleteServiceService implements AutoCompleteService {
  labelAttribute = 'name';
  private countries: any[] = [];
  path = environment.apiUrl;
  path2 = environment.apiUrl2;
  authHttpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient) {
    const auth = '';
    this.authHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: auth,
      }),
    };
  }

  getResults(keyword: string): Observable<any[]> {
    let observable: Observable<any>;

    if (this.countries.length === 0) {
      observable = this.http.get(
        `https://listnbuy.com/api/v2/filter?category=vehicles`
      );
    } else {
      observable = of(this.countries);
    }

    return observable.pipe(
      map((result) => {
        console.log(result.data.advert);
        return result.data.advert.filter((item) => {
          return item.name.toLowerCase().startsWith(keyword.toLowerCase());
        });
      })
    );
  }

  searchAdverts = (
    keyword: string,
    sortBy: string = 'published_at',
    sortDir: string = 'desc',
    page: number = 1
  ) => {
    return this.http
      .get<any>(
      `https://listnbuy.com/api/v2/filter?category=vehicles&q=${keyword}&sortBy=${sortBy}&sortDir=${sortDir}&page=${page}`
      )
      .toPromise();
  };

  productDetail=(category:string,productcode:string)=>{
    return this.http
      .get<any>(
      `https://listnbuy.com/api/v2/item/${productcode}?category=${category}`
      )
      .toPromise();
  }
}
