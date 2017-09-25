import { Injectable } from '@angular/core';
import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild, ParamMap
} from '@angular/router';


@Injectable()
export class UserDetailGuard implements CanActivateChild {

    activeUserId: number;
    constructor(private router: Router) { }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //     let url: string = state.url;

    //     return this.checkLogin(url);
    // }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        this.activeUserId = +route.params['id'];
        // let url: string = state.url;
        console.log('can activate child url : ' + this.activeUserId);
        if (this.activeUserId % 2 === 0) {
            this.router.navigate(['users/restricted_access']);
            return false;
        }
        else {
            return true;
        }
    }

    /* . . . */
}