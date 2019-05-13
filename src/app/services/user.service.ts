import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "../../environments/environment";

@Injectable()
export class UserService {
  private headers: Headers;

  constructor(private authService: AuthService, private http: Http) {
    this.headers = new Headers({
      Authorization: `Bearer ${this.authService.getToken()}`
    });
  }

  getUserById(id: number) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get(`${environment.url}user${id}`, options);
  }
}
