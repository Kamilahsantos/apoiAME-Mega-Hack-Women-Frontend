import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/auth';
import { ShellComponent } from './shell.component';


export class Shell {

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      data: { reuse: true }
    };
  }
}
