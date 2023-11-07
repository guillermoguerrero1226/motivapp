import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up.component";
import { VerifyEmailComponent } from "../components/verify-email/verify-email.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: 'sign-up', component: SignUpComponent },
    { path: 'verify-email-address', component: VerifyEmailComponent },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SignUpRoutingModule { }