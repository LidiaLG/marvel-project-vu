import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public ts: number = 1;

  generateHash( private_key: string, public_key: string ): string {
    return Md5.hashStr( this.ts.toString() + private_key + public_key ) as string;
  }

  setHash( key: string, hash: string ): void {
    return localStorage.setItem( 'marvelHash', hash );
  }

  getHash(): string | null {
    return localStorage.getItem( 'marvelHash' );
  }

  getPublicKey(): string | null {
    return localStorage.getItem( 'public_key' );
  }

  setPublicKey( public_key: string ): void {
    localStorage.setItem( 'public_key', public_key );
  }
}
