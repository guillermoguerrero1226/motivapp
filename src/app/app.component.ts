import { Component, OnInit } from '@angular/core';
import { UserType } from './core/interfaces/user-type';
import { AuthService } from './shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userTypes: UserType[] = [];
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const isUserLogged = this.authService.isLoggedIn;
    if (isUserLogged) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['sign-up']);
    }
  }
  title = 'motivapp';
}
