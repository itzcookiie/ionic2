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

  userSignUp(): void {
    this.checkUserCredentials(this.userInput)
  }

  checkUserCredentials({email, password}: User): void {
    if(email.includes("@") && password.length === 4) {
      this.userService.saveUser(this.userInput)
      this.router.navigate(['/user-profile'])
      this.userInput = {email: '', password: ''}
      this.message = ''
      this.userService.validateUser()
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