import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './servises/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject( Router);
  if (authService.isauthenticated()) {
    return true;
  }
  else{
    router.navigate(['/'])
    return false;
  }
};
