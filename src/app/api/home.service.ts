import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }


  public getHomeAdverts(){

  }


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
