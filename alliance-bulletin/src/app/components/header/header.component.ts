import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: MsalService
  ) { }

  ngOnInit(): void {
  }

  //Zachary Orr from the United Systems team helped with this functionality.
  public logOut() {
    this.authService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200'
    })
  }

}
