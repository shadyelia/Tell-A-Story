import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { Person } from "../../../models/PersonVM";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent implements OnInit {
  person: Person;
  personForm: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.person = this.authService.getAuthUser();
    this.personForm = new FormGroup({
      name: new FormControl(this.person.name, Validators.required),
      email: new FormControl(
        this.person.email,
        Validators.compose([Validators.required, Validators.email])
      )
    });
  }

  editProfile() {
    if (this.personForm.valid) {
      this.person.email = this.personForm.get("email").value();
      this.person.name = this.personForm.get("name").value();

      this.userService.editProfile(this.person).subscribe(res => {
        this.userService.fireUpdateEvent(res);
      });
    }
  }
}
