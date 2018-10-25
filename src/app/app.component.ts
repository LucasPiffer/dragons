import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  pageTitle: string = 'Dragons';

  constructor(private authService: AuthService) {}

  authenticated() {
    return this.authService.isAuthenticated();
  }

}