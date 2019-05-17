import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { StoryService } from "../../services/story.service";
import { NotifyService } from "../../services/notify.service";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Story } from "../../models/storyVM";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.css"]
})
export class StoryComponent implements OnInit {
  @Input() story;
  @Output() storyDeleted = new EventEmitter();
  editing: boolean = false;
  canEditOrDelete: boolean = undefined;
  storyForm: FormGroup;
  updatedStory: Story;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storyService: StoryService,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.canModify();
  }

  canModify() {
    if (this.story) {
      this.createForm();
      this.canEditOrDelete = this.story.id == +this.authService.getAuthUserId();
    }
  }

  createForm() {
    this.storyForm = this.fb.group({
      title: [this.story.title, Validators.required],
      content: [
        this.story.content,
        [Validators.required, Validators.minLength(15)]
      ]
    });
  }

  edit() {
    if (this.story) {
      this.storyForm.setValue({
        title: this.story.title,
        content: this.story.title
      });
      this.editing = true;
    }
  }

  updatestory() {
    if (this.storyForm.valid) {
      this.updatedStory.id = this.story.id;
      this.updatedStory.title = this.storyForm.get("title").value();
      this.updatedStory.content = this.storyForm.get("content").value();
      this.storyService.updateStory(this.updatedStory).subscribe(res => {
        this.story = res;
        this.editing = false;
        this.notifyService.notify(true, "Story updated", "success");
      });
    }
  }

  cancel() {
    this.storyForm.reset();
    this.editing = false;
  }

  deletestory() {
    if (this.story)
      this.storyService.deleteStory(this.story.id).subscribe(res => {
        this.storyDeleted.emit(this.story.id);
      });
  }
}
