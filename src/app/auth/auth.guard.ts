import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../authservice/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service : AuthServiceService , private router : Router , private activePage: ActivatedRoute){}
  Student = {
    role : 'Student'
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Current Route"+this.activePage.snapshot.data.title)
  //     if(this.service.checkUser(route.url)){
  //       return true;
  //     }
  //     else{
  //       alert("You don't have permission....");
  //       this.router.navigate(['/login'])
  //     }
      if(next.data[0] == this.Student.role){
        return true;
      }
      else 
        return false;
  }
  
}
