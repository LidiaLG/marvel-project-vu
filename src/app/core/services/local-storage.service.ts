import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  ts = environment.ts;

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
