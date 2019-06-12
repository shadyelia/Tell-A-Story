import { Component, HostBinding } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { NgxSmartModalService } from "ngx-smart-modal";

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
    public ngxSmartModalService: NgxSmartModalService
  ) {
    this.id = this.authService.getAuthUserId();
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
