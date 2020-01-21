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

  private userInput:User = {
    email: '',
    password: ''
  }

  ngOnInit() {}

  userSignUp() {
    if(this.userInput.email && this.userInput.password) {
      this.userService.saveUser(this.userInput)
      this.router.navigate(['/user-profile'])
      this.userInput = {email: '', password: ''}
    } else {
      console.log('Error')
    }

  }


}

interface User {
  email: string;
  password: string;
}