import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);

  if( localStorageService.getHash() && localStorageService.getPublicKey() ) {
    return true;
  } else {
    return router.navigate(['/'])
  }
};
