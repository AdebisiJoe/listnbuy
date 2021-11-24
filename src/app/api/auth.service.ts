import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { User } from ".././models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {}

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email, password) {
    return this.http.post<any>(
      `${environment.apiUrl}auth/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  }

  register(
    email: string,
    firstname: string,
    lastname: string,
    password: string
  ) {
    const localUser = JSON.parse(localStorage.getItem("user"));
    
    const http_object = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    const httpOtions = {
      headers: http_object,
    };
    return this.http
      .post<User>(
        `${environment.apiUrl}auth/register`,
        { email, firstname, lastname, password },
        httpOtions
      )
      .pipe(
        map((user) => {
          //localStorage.setItem("admin", JSON.stringify(admin));
          return user;
        })
      );
  }
}
