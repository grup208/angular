import { CanActivateFn } from '@angular/router';

let role='admin'

export const authGuard: CanActivateFn = (route, state) => {

  if(role==="admin") return true;
  return false;
};
