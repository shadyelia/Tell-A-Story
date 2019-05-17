import { Component, OnInit } from "@angular/core";
import { StoryService } from "../../services/story.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  stories: any;

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.getAllStories();
  }

  getAllStories() {
    this.storyService.getAllStories().subscribe(res => {
      this.stories = res;
    });
  }

  storyDeleted(storyId: number) {
    let story = this.stories.find(s => {
      return s.id == storyId;
    });

    let storyIndex = this.stories.indexOf(story);

    this.stories.splice(storyIndex, 1);
  }
}
