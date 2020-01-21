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

  public invalidUser:Boolean = false;

  private userInput:User = {
    email: '',
    password: ''
  }

  ngOnInit() {}

  async userLogin() {
      const user = await this.userService.findUser(this.userInput)
      if(user) {
        this.invalidUser = false;
        this.router.navigate(['/user-profile'])
        this.userInput = {email: '', password: ''}
      } else {
        this.invalidUser = true;
      }
  }

}

interface User {
  email: string;
  password: string;
}