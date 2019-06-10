import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { OverlayContainer } from "@angular/cdk/overlay";
import { NgxSmartModalService } from "ngx-smart-modal";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tell A Story";
  id: number;
  theme = "default";

  constructor(
    private authService: AuthService,
    private router: Router,
    private overlayContainer: OverlayContainer,
    public ngxSmartModalService: NgxSmartModalService
  ) {
    this.id = this.authService.getAuthUserId();
    overlayContainer.getContainerElement().classList.add("unicorn-dark-theme");
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate["/auth/login"];
    });
  }

  changeTheme() {
    this.theme = "black-theme";
    const overlayContainerClasses = this.overlayContainer.getContainerElement()
      .classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter(
      (item: string) => item.includes("-theme")
    );
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.theme);
  }
}
