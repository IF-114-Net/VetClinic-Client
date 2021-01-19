import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate{
  routeData: any;
  name: any;

  constructor(private authService: AuthService,
  private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let role = route.data["role"] as string;

  	if(this.authService.isInRole(role)){
  	  return true;
  	}

  	this.router.navigate(['forbidden']);
  	return false;
  }
}
