import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    providers: [ UserService ]
})
export class UserListComponent implements OnInit {

    // private userList:

    constructor(private _userService: UserService) {

    }

    ngOnInit() {
        this.requestUserList();
        this.requestUserById('1')
    }

    private requestUserList() {
        this._userService.getUserList().subscribe(userList => {
            console.log(userList)
        });
    }

    private requestUserById(id: string) {
        this._userService.getUserById(id).subscribe(userList => {
            console.log(userList)
        });
    }

}
