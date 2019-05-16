import { RegisterComponent } from "../pages/register/register.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { LoginComponent } from "../pages/login/login.component";
import { AuthGuard } from "../guards/auth.guard";
import { AuthedGuard } from "../guards/authed.guard";
import { ProfileComponent } from "../pages/profile/profile.component";
import { ProfileWallComponent } from "./../pages/profile/profile-wall/profile-wall.component";
import { EditProfileComponent } from "./../pages/profile/edit-profile/edit-profile.component";
import { CreateStoryComponent } from "./../pages/create-story/create-story.component";

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
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: ProfileWallComponent
      },
      {
        path: "edit",
        component: EditProfileComponent
      }
    ]
  },
  {
    path: "create/story",
    component: CreateStoryComponent,
    canActivate: [AuthGuard]
  }
];
