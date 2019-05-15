import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "../../environments/environment";

@Injectable()
export class FollowService {
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers({
      Authorization: `Bearer ${this.getToken()}`
    });
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  isFollowing(id: number) {
    let body = { user_to_check_if_is_following_id: id };
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(
      environment.url + "/user/is/following",
      body,
      options
    );
  }

  follow(id: number) {
    let body = { user_to_follow_id: id };
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(environment.url + "/user/follow", body, options);
  }

  unFollow(id: number) {
    let body = { user_to_unfollow_id: id };
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(environment.url + "/user/unFollow", body, options);
  }
}
