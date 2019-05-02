import { Injectable } from '@angular/core';
import { Person } from "../models/PersonVM";
import { Http } from '@angular/http'
import { environment } from '../../environments/environment'
import { HttpHeaders } from '@angular/common/http';
import { LoginVM } from "../models/LoginVM";


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

    login(loginVM: LoginVM) {
        return this.http.post(environment.url, loginVM); //,this.httpOptions
    }

    register(person: Person) {
        return this.http.post(environment.url, person); //,this.httpOptions
    }
}