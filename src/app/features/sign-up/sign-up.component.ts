import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  signUpForm = new FormGroup({
    names: new FormControl('', Validators.required),
    lastNames: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  ngOnInit() { }

  isValid(formControlName: string) {
    const formControl = this.signUpForm.get(formControlName);
    return formControl?.touched && !!formControl?.errors;
  }

  onSubmit() {
    this.authService
      .SignUp(this.signUpForm.value as User)
      .then(() => this.router.navigate(["home"]));
  }
}
