import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = environment.apiUrl;
  authHttpOptions: { headers: HttpHeaders };

  constructor( private http: HttpClient) {
    const auth = '';
    this.authHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: auth,
      }),
    };
   }

  getUserProfile=async(user_encoded_id:string)=>{
  
    return this.http
    .get<any>(this.path + `seller/${user_encoded_id}`, this.authHttpOptions)
    .toPromise();

  }

  
}
