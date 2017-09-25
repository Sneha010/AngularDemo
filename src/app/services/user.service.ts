import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../models/user';

@Injectable()
export class UserService {

    constructor(private _http: Http) {
    }

    public getUserList(): Observable<User[]> {
        return this._http.get('http://jsonplaceholder.typicode.com/users')
            .map(res => res.json() as User[])
    }

    public getUserById(id: Number): Observable<User> {
        return this._http.get('http://jsonplaceholder.typicode.com/users/' + id)
            .map(res => res.json() as User)
    }

}