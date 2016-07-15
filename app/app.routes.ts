
import { provideRouter, RouterConfig } from '@angular/router';

const routes: RouterConfig = [
  { path: "login", component: ActivityLoginComponent },
  { path: "signup", component: ActivitySignupComponent },
  { path: "create", component: ActivityCreateComponent },
  { path: "joined", component: ActivityJoinedComponent },
  { path: "activity", component: ActivityComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];

