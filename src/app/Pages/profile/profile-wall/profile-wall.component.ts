import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile-wall",
  templateUrl: "./profile-wall.component.html",
  styleUrls: ["./profile-wall.component.css"]
})
export class ProfileWallComponent implements OnInit {
  stories: any;
  id: number;
  constructor(
    private userService: UserService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.id = +res["id"];
      this.userService.getAllStoriessById(this.id).subscribe(res => {
        this.stories = res;
      });
    });
  }
}
