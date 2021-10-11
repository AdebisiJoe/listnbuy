import { Injectable } from '@angular/core';
import * as Crypto from "crypto-js";
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  auth: string;
  user: any;
  encryptionKey = '1aRMeNGAGE1WEB';

  constructor(private crypto: EncryptionService) {

  }

  // encryptText(text: string) {
  //   return Crypto.AES.encrypt(text, this.encryptionKey).toString();
  // }

  // decryptText(encrypted: string) {
  //   let dec = Crypto.AES.decrypt(encrypted, this.encryptionKey);
  //   return dec.toString(Crypto.enc.Utf8);
  // }

  saveUser = (user: any) => {
    if (user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    }
  }

  saveAuth = (auth: string) => {
    this.auth = auth;
    const secureAuth = this.crypto.encryptText(auth);
    localStorage.setItem("auth", secureAuth);
  }

  getUser = () => {
    if (!this.user) {
      const userStr = localStorage.getItem("user");
      try {
        if (userStr) {
          this.user = JSON.parse(userStr);
        }
      }
      catch (err) {
        console.log("Error fetching user: ", err);
      }
    }
    return this.user;
  }

  getAuth = () => {
    if (!this.auth) {
      const secureAuth = localStorage.getItem("auth");
      this.auth = this.crypto.decryptText(secureAuth);
    }
    return this.auth
  }

}
