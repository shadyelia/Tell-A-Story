import { Injectable } from "@angular/core";
import { Person } from "../models/PersonVM";
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "../../environments/environment";
import { HttpHeaders } from "@angular/common/http";
import { LoginVM } from "../models/LoginVM";

@Injectable()
export class AuthService {
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers({
      Authorization: `Bearer ${this.getToken()}`
    });
  }

  login(loginVM: LoginVM) {
    return this.http.post(environment.url + "/login", loginVM);
  }

  register(person: Person) {
    return this.http.post(environment.url + "/register", person);
  }

  logout() {
    localStorage.clear();
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get(environment.url + "/logout", options); //,this.httpOptions
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("token") === null ? false : true;
  }

  getAuthUser(): Person {
    return JSON.parse(localStorage.getItem("person"));
  }

  getAuthUserId(): number {
    return JSON.parse(localStorage.getItem("person")).id;
  }

  getToken(): string {
    return localStorage.getItem("token");
  }
}
