import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private localStorageService = inject(LocalStorageService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const hash = this.localStorageService.getHash();
      const public_key = this.localStorageService.getPublicKey();
      const ts = this.localStorageService.ts.toString();

      //TODO: mirar cómo hacer este manejo de error, sino lo pongo me falla
      if (!hash || !public_key) {
        console.error('Missing hash or public key in local storage');
        return next.handle(req);
      }

      const authReq = req.clone({
        setParams: {
          ts: ts,
          apikey: public_key,
          hash: hash
        }
      });
      return next.handle( authReq );
  }
};
