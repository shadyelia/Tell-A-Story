import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { AuthService } from "./auth.service";
import { environment } from "../../environments/environment";

Injectable();

export class UserServices {
  private headers: Headers;

  constructor(private authService: AuthService, private http: Http) {
    this.headers = new Headers({
      Authorization: `Bearer ${this.authService.getToken()}`
    });
  }

  getUserById(id) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get(`${environment.url}/user/${id}`, options);
  }
}
