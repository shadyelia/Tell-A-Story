import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Person } from "../models/PersonVM";
import { UserServices } from "../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  id: number;
  person: any;
  date = "24th Dec 2009";
  constructor(
    private router: ActivatedRoute,
    private authService: AuthService,
    private userServices: UserServices
  ) {}

  ngOnInit() {
    this.router.params.subscribe(res => {
      if (res["id"] != this.authService.getAuthUserId) {
        this.person = this.authService.getAuthUser();
      } else {
        /* this.userServices.getUserById(res["id"]).subscribe(val => {
          this.person = val;
        });*/
      }
    });
  }

  //Promise.resolve(this.authService.getAuthUser());
}
