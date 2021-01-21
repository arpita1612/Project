import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  val = false;
  constructor() { }


  givepermission(data){
    if(data == true)
      this.val = data;
  
  }

  checkUser(url):boolean{  

   
      return this.val;  
    
     
    } 
}
