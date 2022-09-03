import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: OnExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // const res = confirm('¿Esta seguro de salir de esta pagina?');
    // return res;
    const componentInstance = component.canExit;
    return componentInstance ? componentInstance() : true;
  }

}

export interface OnExit {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
