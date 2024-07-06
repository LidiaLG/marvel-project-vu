import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';


@Injectable()
export class VerifyInterceptor implements HttpInterceptor {
  private localStorageService = inject(LocalStorageService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const hash = this.localStorageService.getHash();
    const public_key = this.localStorageService.getPublicKey();

    if (!hash || !public_key) {
      // Lanzar un error si no se encuentra el hash o la public_key
      return throwError(() => new HttpErrorResponse({
        error: 'Missing hash or public key in local storage',
        status: 401,
        statusText: 'Unauthorized'
      }));
    }
    return next.handle(req);
  }
}
