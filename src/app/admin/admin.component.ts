import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../authservice/auth-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router : Router , private authservice : AuthServiceService , private  activePage: ActivatedRoute) { }

  admin = ["Student Page" ,"Admin Page"];
  ngOnInit(): void {
    console.log("Current Route :"+this.activePage.snapshot.data.title);
  }

  onClick(){
    this.authservice.givepermission(true);
    this.router.navigate(['/Student']);
  }
}
