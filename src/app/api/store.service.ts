import { Injectable } from '@angular/core';
import * as Crypto from "crypto-js";
import { EncryptionService } from './encryption.service';
import { Storage } from '@capacitor/storage';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  auth: string;
  user: any;
  encryptionKey = '1aRMeNGAGE1WEB';

  constructor(private crypto: EncryptionService) {

  }


  saveUser =async (user: any) => {
    if (user) {
      this.user = user;
      await Storage.set({key:"user", value:JSON.stringify(user)});
    }
  }

  saveAuth = async(auth: string) => {
    this.auth = auth;
    const secureAuth = this.crypto.encryptText(auth);
    await Storage.set({key:"auth", value:secureAuth});
  }

  getUser = async () => {
    if (!this.user) {
     
      const { value } = await Storage.get({ key: 'user' });
      try {
        if (value) {
          this.user = JSON.parse(value);
        }
      }
      catch (err) {
        console.log("Error fetching user: ", err);
      }
    }
    return this.user;
  }

  getAuth = async() => {
    if (!this.auth) {
    
      const { value } = await Storage.get({ key: 'auth' });
      this.auth = this.crypto.decryptText(value);
    }
    return this.auth
  }

  remove=async(key:string)=>{
    await Storage.remove({ key: key });
  }

  save=async(key:string,data:any)=>{
    await Storage.set({key:key, value:JSON.stringify(data)});
  }

  get=async(key:string)=>{
    const { value } = await Storage.get({ key: key });

    return value;
  }

}
