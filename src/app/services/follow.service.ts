import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class FollowService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`
    });
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  isFollowing(id: number) {
    let body = { user_to_check_if_is_following_id: id };
    return this.http.post(environment.url + "/user/is/following", body, {
      headers: this.headers
    });
  }

  follow(id: number) {
    let body = { user_to_follow_id: id };
    return this.http.post(environment.url + "/user/follow", body, {
      headers: this.headers
    });
  }

  unFollow(id: number) {
    let body = { user_to_unfollow_id: id };
    return this.http.post(environment.url + "/user/unFollow", body, {
      headers: this.headers
    });
  }
}
