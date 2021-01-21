import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private activePage: ActivatedRoute, private titleservice : Title , private router : Router){

  }
  ngOnInit(): void {
    // Way 1 : this.titleservice.setTitle('New Title')
    this.ChangeTitle();
  }

  ChangeTitle(){
    this.router.events.subscribe(event => {
      switch(true){
        case event instanceof NavigationEnd:
          this.titleservice.setTitle(this.activePage.firstChild.snapshot.data.title);
          break;

        default:
          break;
      }
    })
  }
}

