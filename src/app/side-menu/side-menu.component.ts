import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(private menu: MenuController, private userService: UserService) { }

  ngOnInit() {}

  closeMenu() {
    this.menu.close('main-menu')
    this.userService.inValidateUser()
  }

}
