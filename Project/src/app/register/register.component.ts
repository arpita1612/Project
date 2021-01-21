import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router , private fb : FormBuilder , private  activePage: ActivatedRoute) { }

  Register : FormGroup;
  StudentData = [
    {"Username": "Arpita" , "Password" : "pass1234" }, 
    {"Username": "Anuja" , "Password" : "pass1224" },
    {"Username": "Pooja" , "Password" : "pass654" },
    {"Username": "Saurabh" , "Password" : "pass895" },
    {"Username": "Nikhil" , "Password" : "pass642" },
    {"Username": "Shree" , "Password" : "pass000" },
    {"Username": "Anvi" , "Password" : "pass34" },
    {"Username": "Tanvi" , "Password" : "pass0234" },
    {"Username": "Komal" , "Password" : "pass1994" },
    {"Username": "Shyam" , "Password" : "pass987" },
  ]
  AdminData = [
    {"Username": "Shiv" , "Password" : "pass123" }, 
    {"Username": "Shreya" , "Password" : "pass24" },
    {"Username": "Rohit" , "Password" : "pass54" },
    {"Username": "Deepak" , "Password" : "pass999" },
    {"Username": "Nikita" , "Password" : "pass666" }
  ]

  ngOnInit(): void {
    this.Register = this.fb.group({
      Username : ['',[Validators.required]],
      Password : ['',[Validators.required]],
      Gender : ['',[Validators.required]],
      option :['',[Validators.required]]
    })
    // localStorage.setItem("studentdata", JSON.stringify(this.StudentData));
    
    // //this.studdata = JSON.parse(localStorage.getItem("studentdata"));

    // localStorage.setItem("admindata", JSON.stringify(this.AdminData));
    
    // //this.admindata = JSON.parse(localStorage.getItem("admindata"));
    console.log("Current Route :"+this.activePage.snapshot.data.title);
  }

  onRegister(){
    var Data = {
      Username : this.Register.value.Username,
      Password : this.Register.value.Password,
      Gender : this.Register.value.Gender,
      option : this.Register.value.option
    }
    console.log(Data);
      
    if(this.Register.value.option == "Admin")
    { 
        this.AdminData.push(Data);
        localStorage.setItem("admindata", JSON.stringify(this.AdminData));
        console.log(JSON.parse(localStorage.getItem("admindata")));
    }
    else{

        this.StudentData.push(Data)
        localStorage.setItem("studentdata", JSON.stringify(this.StudentData));
        console.log(JSON.parse(localStorage.getItem("studentdata")));
    }
    this.Register.reset();
  }

}
