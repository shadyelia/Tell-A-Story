import { Injectable } from "@angular/core";
import { Person } from "../models/PersonVM";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { LoginVM } from "../models/LoginVM";
import { Register } from "../models/RegisterVM";

@Injectable()
export class AuthService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`
    });
  }

  login(loginVM: LoginVM) {
    return this.http.post(environment.url + "authenticate", loginVM);
  }

  register(person: Register) {
    return this.http.post(environment.url + "/register", person);
  }

  logout() {
    localStorage.clear();
    return this.http.get(environment.url + "/logout", {
      headers: this.headers
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("token") === null ? false : true;
  }

  getAuthUser(): Person {
    var Person = JSON.parse(localStorage.getItem("person"));
    if (Person) return Person;
  }

  getAuthUserId(): number {
    var Person = JSON.parse(localStorage.getItem("person"));
    if (Person) return Person.id;
  }

  getToken(): string {
    return localStorage.getItem("token");
  }
}
