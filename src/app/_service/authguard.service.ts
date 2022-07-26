import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SystemapiService } from './systemapi.service';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private data:SystemapiService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {        
      if(!this.data.getUserLoggedIn())
      {
        this.router.navigate(['/login']);
      }

      if(this.data.getUserLoggedIn()=="true")
      {
        return true;
      }
      else{
        return false;
      }
    //return this.data.getUserLoggedIn();
  }
}
