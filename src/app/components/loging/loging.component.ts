
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
  email: string = "";
  password: string = "";
  token:string="";
  decodedToken : any;
  constructor(
    private route : Router, 
    private httpClient: HttpClient,
    private userService: UserService,
  ) {
    
   }

  ngOnInit(): void {
  }

  login(){
    var _ = this;
    const data= {
      email: this.email,
      password : this.password
    }
    this.userService.logingFunction(data).subscribe(event=>{
      console.debug('event : ' + event);
      _.token = event['token'];
    })
    setTimeout(() => {
      console.debug(JSON.stringify(_.token))   
      localStorage.setItem('token', _.token);
    }, 500);
    setTimeout(() => {
      this.decodedToken = jwt_decode(_.token); 
      localStorage.setItem('userInfos', this.decodedToken['roles']);
      localStorage.setItem('userName', this.decodedToken['username']);
      console.debug(JSON.stringify(this.decodedToken))   
    }, 700);
    setTimeout(() => {
    if(localStorage.getItem('token')){
      this.route.navigate(['/films']) 
    }
    else{
      alert("Vous n'êtes pas connecté !!")
     }
    }, 1000);
  }
}
