import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { Routes } from "./routes/routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgProgressModule, NgProgressBrowserXhr } from "ngx-progressbar";

import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { AuthedGuard } from "./guards/authed.guard";
import { NotifyService } from "./services/notify.service";
import { UserService } from "./services/user.service";
import { FollowService } from "./services/follow.service";

import { BrowserXhr, HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { RegisterComponent } from "./pages/register/register.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ProfileWallComponent } from "./pages/profile/profile-wall/profile-wall.component";
import { EditProfileComponent } from "./pages/profile/edit-profile/edit-profile.component";
import { FollowComponent } from "./pages/profile/follow/follow.component";

import { FormatDatePipe } from "./pipes/format-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    FormatDatePipe,
    ProfileWallComponent,
    EditProfileComponent,
    FollowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgProgressModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthedGuard,
    NotifyService,
    UserService,
    FollowService,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
