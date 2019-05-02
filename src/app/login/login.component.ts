import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { LoginVM } from "../models/LoginVM";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  showValid: boolean = false;
  signupError: string;
  loginForm: FormGroup;
  showPassword: boolean;
  passwordType: string;
  showConfirmPassword: boolean;
  confirmPasswordType: string;
  loginVM = new LoginVM();

  constructor(private authSerivce: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$-/:-?{-~!"^_`\[\]@%$*])(?=.{8,})/
          )
        ])
      )
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginVM.email = this.loginForm.get("email").value();
      this.loginVM.password = this.loginForm.get("password").value();

      this.authSerivce.login(this.loginVM).subscribe(res => {
        //localStorage.setItem("token", "");

        this.router.navigate["/dashboard"];
      });
    }
  }
}
