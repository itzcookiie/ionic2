import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../services/user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  private userInput:User = {
    email: '',
    password: ''
  }

  private message:string

  ngOnInit() {}

  public async userLogin(): Promise<void> {
      const user:User = await this.userService.findUser(this.userInput)
      if(user) {
        this.userService.validateUser();
        this.router.navigate(['/user-profile'])
        this.userInput = {email: '', password: ''}
      } else {
        this.message = 'Incorrect email or password'
      }
  }
}

interface User {
  email: string;
  password: string;
}