import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
  });

  constructor(
    private authService: MsalService,
    public router: Router
  ) { }

  public openMicrosoftSignIn(): void {
    this.authService.loginPopup()
      .subscribe({
        next: (result) => {
          console.log(result);
          this.router.url == '/navigate-bulletins';
        }
      })
  }
}
