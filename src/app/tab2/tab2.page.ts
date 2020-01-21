import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private userService: UserService, private menu: MenuController) {}

  ngOnInit() {
    this.userService.fetchData()
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
