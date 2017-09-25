import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from '../../models/user';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    providers: [ UserService ]
})
export class UserListComponent implements OnInit {

     private userList: User[];
     private activeUser: User;

    constructor(private _userService: UserService) {

    }

    ngOnInit() {
        this.requestUserList();
        this.requestUserById(1)
    }

    private requestUserList() {
        this._userService.getUserList().subscribe(userList => {
            this.userList = userList;
        });
    }

    private requestUserById(id: Number) {
        this._userService.getUserById(id).subscribe(user => {
           this.activeUser = user;
        });
    }

}
