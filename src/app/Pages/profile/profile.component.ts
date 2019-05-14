import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";
//import { Person } from "../../models/PersonVM";
import { UserService } from "../../services/user.service";

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
    private userService: UserService
  ) {
    this.userService.userProfileUpdated.subscribe(person => {
      this.person = person;
    });
  }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.id = +res["id"];
      if (this.id != +this.authService.getAuthUserId) {
        this.person = this.authService.getAuthUser();
      } else {
        this.userService.getUserById(this.id).subscribe(val => {
          this.person = val;
        });
      }
    });
  }

  isAuthUserProfile(): boolean {
    return this.id == +this.authService.getAuthUserId;
  }

  //Promise.resolve(this.authService.getAuthUser());
}
