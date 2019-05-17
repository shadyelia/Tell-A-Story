import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { FollowService } from "../../../services/follow.service";

@Component({
  selector: "app-follow",
  templateUrl: "./follow.component.html",
  styleUrls: ["./follow.component.css"]
})
export class FollowComponent implements OnInit, OnChanges {
  @Input() currentProfileId;
  following: boolean = undefined;

  constructor(private followService: FollowService) {}

  ngOnInit() {
    this.isFollowing();
  }

  ngOnChanges(changes) {
    this.isFollowing();
  }

  isFollowing() {
    this.followService.isFollowing(this.currentProfileId).subscribe(res => {
      this.following = res["following"];
    });
  }

  follow() {
    this.followService.follow(this.currentProfileId).subscribe(res => {
      this.following = true;
    });
  }

  unFollow() {
    this.followService.unFollow(this.currentProfileId).subscribe(res => {
      this.following = false;
    });
  }
}
