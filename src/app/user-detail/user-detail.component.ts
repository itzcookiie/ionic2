import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service'
import { ActivatedRoute, ParamMap, Router, CanActivate } from '@angular/router'
import { switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, CanActivate {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('detailId')
    this.userService.getItem(+id)  
}

  canActivate() {
    if(!this.router.navigated) { 
      return this.router.navigate(['user-profile'])    
    }
    return true
  }

}
