import { AuthService } from "./auth.service";
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Person } from "../models/PersonVM";

@Injectable()
export class UserService {
  public userProfileUpdated: EventEmitter<Person>;
  private headers: HttpHeaders;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.userProfileUpdated = new EventEmitter();
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.getToken()}`
    });
  }

  getUserById(id: number) {
    return this.http.get(`${environment.url}/user${id}`, {
      headers: this.headers
    });
  }

  fireUpdateEvent(person: any) {
    this.userProfileUpdated.emit(person);
  }

  editProfile(person: Person) {
    return this.http.put(`${environment.url}/user`, person, {
      headers: this.headers
    });
  }

  getAllStoriessById(id: number) {
    return this.http.get(`${environment.url}/stories/${id}`, {
      headers: this.headers
    });
  }
}
