import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Story } from "../models/storyVM";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class StoryService {
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers({
      Authorization: `Bearer ${this.getToken()}`
    });
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  createStory(story: Story) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(`${environment.url}/story`, story, options);
  }
}
