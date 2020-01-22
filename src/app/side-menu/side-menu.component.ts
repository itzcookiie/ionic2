import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'
import { UserService } from '../services/user.service'
import { Plugins } from '@capacitor/core';
import { Router } from "@angular/router"

const { Storage } = Plugins;

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(private menu: MenuController, private userService: UserService, private router:Router) { }

  ngOnInit() {}

  public closeMenu() {
    this.menu.close('main-menu')
    this.userService.inValidateUser()
  }

  private closeMenuAndLogOut() {
    this.closeMenu()
    this.userService.removeCurrentUser()
  }

}
