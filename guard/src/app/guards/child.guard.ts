import { CanActivateChildFn } from '@angular/router';
let role='gust';

export const childGuard: CanActivateChildFn = (childRoute, state) => {
  if(role==="admin") return true;
  return false;
};
