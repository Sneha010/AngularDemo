import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../../services/user.service'
import { User } from '../../models/user';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  private userId: Number;
  private activeUser: User;


  constructor(private route: ActivatedRoute, private router: Router, private _userService: UserService
  ) {
  }

  ngOnInit() {


    this.route.params.forEach((params: ParamMap) => {
      this.userId = +params['id'];
      console.log('Requested Id ' + this.userId);
      this.requestUserById(this.userId)
    });
  }

  private requestUserById(id: Number) {
    this._userService.getUserById(id).subscribe(user => {
      this.activeUser = user;
    });
  }

}
