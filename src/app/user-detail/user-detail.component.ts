import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  constructor(public userService: UserService) { }

  public item

  ngOnInit() {
    this.item = this.userService.displayedItem 
  }

  

}
