import { Component, OnInit, Input } from "@angular/core";
import { FollowService } from "../../../services/follow.service";

@Component({
  selector: "app-follow",
  templateUrl: "./follow.component.html",
  styleUrls: ["./follow.component.css"]
})
export class FollowComponent implements OnInit {
  @Input() currentProfileId;
  following: boolean = undefined;

  constructor(private followService: FollowService) {}

  ngOnInit() {}

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
