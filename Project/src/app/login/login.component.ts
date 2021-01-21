import { AuthServiceService } from './../authservice/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
 
  constructor(private fb : FormBuilder ,  private router : Router , private authservice : AuthServiceService , private  activePage: ActivatedRoute) { }

  login : FormGroup;
  admindata : any ;
  studdata: any;
  checkbutton = false;
  
  ngOnInit(): void {
    this.login = this.fb.group({
      Username : ['',[Validators.required]],
      Password : ['',[Validators.required]]
    })
      
    this.studdata = JSON.parse(localStorage.getItem("studentdata"));  
    this.admindata = JSON.parse(localStorage.getItem("admindata"));
    console.log("Current Route :"+this.activePage.snapshot.url);
  }
  onSubmitLogin(){
    this.checkbutton = true;
  }
  onSubmitRegister(){
    this.checkbutton = false;
  }
  onSubmit(){
    console.log(" Username : " +this.login.value.Username +" , Password : " + this.login.value.Password)
    console.log(this.studdata);
    console.log(this.admindata);
    if(this.checkbutton){
      for(let i in this.studdata){
      
        if(this.studdata[i].Username == this.login.value.Username && this.studdata[i].Password == this.login.value.Password)
        {          
          console.log(" For iteration " + i + "  Username : " +this.studdata[i].Username +" , Password : " + this.studdata[i].Password)
          this.authservice.givepermission(true);
          this.router.navigate(['/Student']);
          return;
        }  
      }
      for(let i in this.admindata){
      
        if(this.admindata[i].Username == this.login.value.Username && this.admindata[i].Password == this.login.value.Password){
          console.log(" For iteration " + i + "  Username : " +this.admindata[i].Username +" , Password : " + this.admindata[i].Password)
          this.authservice.givepermission(true);
          this.router.navigate(['/Admin']);
          return;
        } 
      }
      alert("Enter correct Data.....");
      this.login.reset();
    }
    else 
    {
      this.router.navigate(['/Register']);
    }
  }
}
