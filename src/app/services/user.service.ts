import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

    constructor(private _http: Http) {
    }

    public getUserList() {
        return this._http.get('http://jsonplaceholder.typicode.com/users')
            .map(res => res.json())
    }

    public getUserById(id: string) {
        return this._http.get('http://jsonplaceholder.typicode.com/users/' + id)
            .map(res => res.json())
    }

}