import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent }, // '/' route
  {
    path: "users",
    component: UsersComponent,
    children: [
      { path: ":id/:name", component: UserComponent }, // '/users/:id' route
    ],
  }, // '/users' route
  {
    path: "servers",
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver },
      }, // '/servers' route
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      }, // '/servers/:id/edit' route
    ],
  }, // '/servers' route
  // { path: "not-found", component: PageNotFoundComponent },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page not found!" },
  },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
