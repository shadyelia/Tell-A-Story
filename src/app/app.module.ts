import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { Routes } from "./routes/routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgProgressModule, NgProgressBrowserXhr } from "ngx-progressbar";
import { GravatarModule } from "ngx-gravatar";

import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { AuthedGuard } from "./guards/authed.guard";
import { NotifyService } from "./services/notify.service";
import { UserService } from "./services/user.service";
import { FollowService } from "./services/follow.service";
import { StoryService } from "./services/story.service";

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
import { CreateStoryComponent } from "./pages/create-story/create-story.component";
import { StoryComponent } from "./pages/story/story.component";
import { HomeComponent } from './pages/home/home.component';

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
    FollowComponent,
    CreateStoryComponent,
    StoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgProgressModule,
    GravatarModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthedGuard,
    NotifyService,
    UserService,
    FollowService,
    StoryService,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
