import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StoryService } from "../../services/story.service";
import { AuthService } from "../../services/auth.service";
import { Story } from "../../models/storyVM";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-story",
  templateUrl: "./create-story.component.html",
  styleUrls: ["./create-story.component.css"]
})
export class CreateStoryComponent implements OnInit {
  storyForm: FormGroup;
  showValid: boolean = false;
  story: Story;

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService,
    private router: Router,
    private authService: AuthService
  ) {
    this.createForm();
  }

  createForm() {
    this.storyForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", [Validators.required, Validators.minLength(15)]]
    });
  }

  ngOnInit() {}

  saveStory() {
    if (this.storyForm.valid) {
      this.story.title = this.storyForm.get("title").value();
      this.story.content = this.storyForm.get("content").value();
      this.storyService.createStory(this.story).subscribe(res => {
        ///
        this.router.navigate([
          "user/profile",
          this.authService.getAuthUserId()
        ]);
      });
    } else {
      this.showValid = true;
    }
  }
}
