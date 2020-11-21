import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  email: string="";
  password: string="";
  role: string="";
  userName: string="";
  encryptSecretKey: string;


  constructor(
    private userService : UserService,
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  addUser(){
    const data = {
      email : this.email,
      password: this.password,
      userName: this.userName,
      role: "USER"
    };
    console.debug(data)
    this.userService.addUser(data).subscribe(event =>{
      console.debug(data)
    })
    setTimeout(() => {
    this.route.navigate(['/login'])    
    }, 300);
  }

}
