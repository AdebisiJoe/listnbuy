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
export class CarService implements AutoCompleteService  {
  path = environment.apiUrl;
  path2 = environment.apiUrl2;
  authHttpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient, private store: StoreService) {
    // const auth = this.getAuth();
    const auth = '';
    this.authHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: auth,
      }),
    };
  }

  getAuth = () => {
    return this.store.getAuth();
  };


  private results: any[] = [];
  getResults(keyword: string): Observable<any[]> {
    let observable: Observable<any>;

    if (this.results.length === 0) {
      observable = this.http.get(
        `https://listnbuy.com/api/v2/filter?category=general`
      );
    } else {
      observable = of(this.results);
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

  getHomeVehicleAdverts = () => {
    return this.http
      .get<any>(this.path2 + `adverts/vehicles`, this.authHttpOptions)
      .toPromise();
  };

  getHomeBikesAdverts = () => {
    return this.http
      .get<any>(this.path2 + `adverts/bikes`, this.authHttpOptions)
      .toPromise();
  };

  getHomeGeneralAdverts = () => {
    return this.http
      .get<any>(this.path2 + `adverts/general`, this.authHttpOptions)
      .toPromise();
  };

  getHomePartsAdverts = () => {
    return this.http
      .get<any>(this.path2 + `adverts/parts`, this.authHttpOptions)
      .toPromise();
  };

  // getDocuments = (id: string) => {
  //   return this.http
  //     .get<any>(this.path2 + `admin/loan/document/${id}`, this.authHttpOptions)
  //     .toPromise();
  // };

  // getComments = (id: string) => {
  //   return this.http
  //     .get<any>(this.path2 + `admin/loan/comments/${id}`, this.authHttpOptions)
  //     .toPromise();
  // };

  // makeComment = (id: string, comment: string) => {
  //   const userID = this.store.getUser().id;
  //   return this.http
  //     .post<any>(
  //       this.path2 + "admin/loan/comment",
  //       JSON.stringify({ applicationId: id, comment, composedBy: userID }),
  //       this.authHttpOptions
  //     )
  //     .toPromise();
  // };

  // lenderDeclineApplication = (id: string, comment: string) => {
  //   console.log("id here", id);
  //   console.log("comment here", comment);
  //   return this.http
  //     .put<any>(
  //       this.path2 + "admin/loan/lender_decline",
  //       JSON.stringify({ id: id, comment: comment }),
  //       this.authHttpOptions
  //     )
  //     .toPromise();
  // };
}
