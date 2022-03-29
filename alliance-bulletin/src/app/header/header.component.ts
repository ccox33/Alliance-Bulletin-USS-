import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class= "navbar is-light">
      <div class = "navbar-brand">
        <a class = "navbar-item" href="https://united-systems.com/">
            <img src = "assets/images/UnitedSystems.png">
        </a>
      </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
