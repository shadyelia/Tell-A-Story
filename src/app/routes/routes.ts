import { RegisterComponent } from "../Pages/register/register.component";
import { DashboardComponent } from "../Pages/dashboard/dashboard.component";
import { LoginComponent } from "../Pages/login/login.component";
import { AuthGuard } from "../guards/auth.guard";
import { AuthedGuard } from "../guards/authed.guard";
import { ProfileComponent } from "../Pages/profile/profile.component";

export const Routes = [
  {
    path: "",
    component: LoginComponent,
    canActivate: [AuthedGuard]
  },
  {
    path: "auth/login",
    component: LoginComponent,
    canActivate: [AuthedGuard]
  },
  {
    path: "auth/register",
    component: RegisterComponent,
    canActivate: [AuthedGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user/profile/:id",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
];
