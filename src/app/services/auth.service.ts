import { Injectable } from '@angular/core';
import { Person } from "../models/Person";
import { Http } from '@angular/http'
import { environment } from '../../environments/environment'
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    constructor(private http: Http) {

    }

    login(person: Person) {
        return this.http.post(environment.url, person); //,this.httpOptions
    }

    register(person: Person) {
        return this.http.post(environment.url, person); //,this.httpOptions
    }
}