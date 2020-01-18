import { Component } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.fetchData()
  }

}
