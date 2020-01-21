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

  ngOnInit() {}

  async userLogin() {
      const user = await this.userService.findUser(this.userInput)
      console.log(user)
      if(user) {
        this.router.navigate(['/user-profile'])
      } else {
        alert('Invalid username or password')
      }
  }

}

interface User {
  email: string;
  password: string;
}