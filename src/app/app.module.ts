import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { Routes } from "./routes/routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { AuthedGuard } from "./guards/authed.guard";
import { NotifyService } from "./services/notify.service";
import { UserService } from "./services/user.service";

import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { RegisterComponent } from "./Pages/register/register.component";
import { DashboardComponent } from "./Pages/dashboard/dashboard.component";
import { LoginComponent } from "./Pages/login/login.component";
import { ProfileComponent } from "./Pages/profile/profile.component";

import { FormatDatePipe } from "./pipes/format-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [AuthService, AuthGuard, AuthedGuard, NotifyService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
