import { AuthServiceService } from './../authservice/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  currentUrl: any;
  student = ["/Student","Student page"];
  constructor(private  activePage: ActivatedRoute , private authservice : AuthServiceService , private router : Router ) { }

  
  ngOnInit(): void {
    this.currentUrl = this.router.url // this.activePage.snapshot.data.title
    console.log("Current Route : "+ this.currentUrl);
     
    if(this.currentUrl in this.student){
      alert(this.currentUrl)
      this.authservice.givepermission(true);
    }
  
  }

 
  
}
