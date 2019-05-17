import { AuthService } from "./auth.service";
import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "../../environments/environment";
import { Person } from "../models/PersonVM";

@Injectable()
export class UserService {
  public userProfileUpdated: EventEmitter<Person>;
  private headers: Headers;

  constructor(private authService: AuthService, private http: Http) {
    this.userProfileUpdated = new EventEmitter();
    this.headers = new Headers({
      Authorization: `Bearer ${this.authService.getToken()}`
    });
  }

  getUserById(id: number) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get(`${environment.url}/user${id}`, options);
  }

  fireUpdateEvent(person: any) {
    this.userProfileUpdated.emit(person);
  }

  editProfile(person: Person) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(`${environment.url}/user`, person, options);
  }

  getAllStoriessById(id: number) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get(`${environment.url}/stories/${id}`, options);
  }
}
