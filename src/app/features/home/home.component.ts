import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToChat() {
    setTimeout(() => {
      this.router.navigate(['chat']);
    }, 300)
  }

  goToMotivation() {
    setTimeout(() => {
      this.router.navigate(['motivation']);
    }, 300)
  }
}
