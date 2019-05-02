import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { Routes } from "./routes/routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { AuthedGuard } from "./guards/authed.guard";

import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuard, AuthedGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
