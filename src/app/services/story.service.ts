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
    return this.http.post(`${environment.url}/stories`, story, options);
  }

  updateStory(story: Story) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(`${environment.url}/stories`, story, options);
  }

  getAllStories() {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get(`${environment.url}/stories`, options);
  }

  deleteStory(id: number) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.delete(`${environment.url}/stories/${id}`, options);
  }
}
