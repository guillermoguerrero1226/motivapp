import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { VerifyEmailComponent } from '../components/verify-email/verify-email.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignUpComponent,
    VerifyEmailComponent
  ],
  imports: [
    SignUpRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SignUpModule { }
