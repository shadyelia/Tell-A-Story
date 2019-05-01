import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showValid: boolean = false;
  signupError: string;
  registrationFrom: FormGroup;
  showPassword: boolean;
  passwordType: string;
  showConfirmPassword: boolean;
  confirmPasswordType: string;

  constructor() {
    this.registrationFrom = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        '',
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
        '',
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
    this.passwordType = 'password';
    this.confirmPasswordType = 'password';
  }

  ngOnInit() {
  }

  signUp() {

  }
}
