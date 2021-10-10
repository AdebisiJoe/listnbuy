import { Injectable } from '@angular/core';
import * as Crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private encryptionKey = '1aRMeNGAGE1WEB';
  constructor() { }

  encryptText(text: string) {
    const enc = Crypto.AES.encrypt(text, this.encryptionKey).toString();
    return enc;
  }
  
  decryptText(encrypted: string) {
    let dec = Crypto.AES.decrypt(encrypted, this.encryptionKey);
    let decs = dec.toString(Crypto.enc.Utf8);
    return decs;
  }

  encryptObject(data: object) {
    const enc = Crypto.AES.encrypt(JSON.stringify(data), this.encryptionKey).toString();
    return enc;
  }

  decryptObject(encrypted: string) {
    try {
      let dec = Crypto.AES.decrypt(encrypted, this.encryptionKey);
      dec = JSON.parse(dec.toString(Crypto.enc.Utf8));
      return dec;
    } catch (err) {
      return null;
    }
  }
}