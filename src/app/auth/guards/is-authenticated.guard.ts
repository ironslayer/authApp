import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  
  // console.log('isAuthenticatedGuard')
  // console.log({ route, state });
  
  const authService = inject( AuthService );
  const router      = inject( Router );
  
  if (authService.authStatus() === AuthStatus.authenticated) return true;

  // if (authService.authStatus() === AuthStatus.checking) return false;

  

  // const url = state.url;
  // localStorage.setItem('url', url);

  router.navigateByUrl('/auth/login');

  return false;
};
