import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {}


  private userInput:User = {
    email: '',
    password: ''
  }

  private message:string = ''

  userSignUp() {
    const { email, password }:User = this.userInput
    if(email && password.length === 4) {
      this.userService.saveUser(this.userInput)
      this.router.navigate(['/user-profile'])
      this.userService.validateUser()
      this.userInput = {email: '', password: ''}
    } else if(!email.includes("@") && password.length <= 3) {
      this.message = `Email must include @ and password must be a minimum of 4 characters`
    } else if(!email.includes("@")) {
      this.message = 'Email must include @'
    } else {
      this.message = 'Password must be a minimum of 4 characters'
    }
  }
}

interface User {
  email: string;
  password: string;
}