import { Component, HostBinding } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { NgxSmartModalService } from "ngx-smart-modal";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss-theme.scss"]
})
export class AppComponent {
  @HostBinding("class.light-theme") lightTheme: boolean = true;
  @HostBinding("class.black-theme") darkTheme: boolean = false;

  title = "Tell A Story";
  id: number;
  theme: string = "Light";

  constructor(
    private authService: AuthService,
    private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    translate: TranslateService
  ) {
    this.id = this.authService.getAuthUserId();
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ar');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ar');
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate["/auth/login"];
    });
  }

  toggleTheme(): void {
    if (this.theme === "Light") {
      this.lightTheme = false;
      this.darkTheme = true;
      this.theme = "Dark";
    } else {
      this.darkTheme = false;
      this.lightTheme = true;
      this.theme = "Light";
    }
  }
}
