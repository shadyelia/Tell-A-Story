import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Register } from "../../models/RegisterVM";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  showValid: boolean = false;
  signupError: string;
  registrationFrom: FormGroup;
  showPassword: boolean;
  passwordType: string;
  showConfirmPassword: boolean;
  confirmPasswordType: string;
  person = new Register();

  constructor(private authSerivce: AuthService, private router: Router) {}

  ngOnInit() {
    this.registrationFrom = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          // this.equalto('confirmPassword'),
          Validators.pattern(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$-/:-?{-~!"^_`\[\]@%$*])(?=.{8,})/
          )
        ])
      ),
      confirmPassword: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          // this.equalto('password'),
          Validators.minLength(8),
          Validators.pattern(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$-/:-?{-~!"^_`\[\]@%$*])(?=.{8,})/
          )
        ])
      )
    });

    this.passwordType = "password";
    this.confirmPasswordType = "password";
  }

  signUp() {
    if (this.registrationFrom.valid) {
      this.person.name = this.registrationFrom.get("name").value();
      this.person.email = this.registrationFrom.get("email").value();
      this.person.password = this.registrationFrom.get("password").value();

      this.authSerivce.register(this.person).subscribe(res => {
        //localStorage.setItem("token", "");
        //localStorage.setItem("person", res);

        this.router.navigate["/dashboard"];
      });
    }
  }
}
