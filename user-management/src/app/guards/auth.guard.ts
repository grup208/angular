import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { IUser } from '../models/user';

export const authGuard: CanActivateFn = (route, state) => {
  const storageService: StorageService = inject(StorageService);
  const router = inject(Router);
  const user: IUser | null = storageService.getUser();
  
  if(!user) {
    router.navigate(['auth']);
    return false;
  }
  else if (user?.role !== 'admin') {
    router.navigate(['']);
    return false;
  }
  return true
};
