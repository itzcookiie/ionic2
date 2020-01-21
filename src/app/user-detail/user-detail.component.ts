import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  public item

  ngOnInit() {
    this.userService.fetchData() 

    const id = this.route.snapshot.paramMap.get('detailId')
    console.log(id, 'id')
    this.item = this.userService.getItem(+id) 
}

}
