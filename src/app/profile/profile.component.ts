import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Person } from "../models/PersonVM";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  id: number;
  person: Person;
  constructor(
    private router: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(res => {
      if (res["id"] == this.authService.getAuthUserId) {
        this.person = this.authService.getAuthUser();
      }
    });
  }

  //Promise.resolve(this.authService.getAuthUser());
}
