import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  path = environment.apiUrl;
  path2 = environment.apiUrl2;
  authHttpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient, private store: StoreService) {
   
  }

  async ngOnInit() {
    const auth = await this.getAuth();
    this.authHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: auth,
      }),
    };
    console.log(auth);
  }

   getAuth = async () => {
    const store=await this.store.getAuth();
    return store;
  };

   getAdvertsDataOptions = async () => {
    const auth = await this.getAuth();
    this.authHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth}`,
      }),
    };

    console.log(auth);
    return this.http
      .get<any>(this.path + `listnbuy/seller/create-advert`, this.authHttpOptions)
      .toPromise();
  };
}
