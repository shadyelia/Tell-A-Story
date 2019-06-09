import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Story } from "../models/storyVM";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class StoryService {
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

  createStory(story: Story) {
    return this.http.post(`${environment.url}/stories`, story, {
      headers: this.headers
    });
  }

  updateStory(story: Story) {
    return this.http.put(`${environment.url}/stories`, story, {
      headers: this.headers
    });
  }

  getAllStories() {
    return this.http.get(`${environment.url}/stories`, {
      headers: this.headers
    });
  }

  deleteStory(id: number) {
    return this.http.delete(`${environment.url}/stories/${id}`, {
      headers: this.headers
    });
  }
}
