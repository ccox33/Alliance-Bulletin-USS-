import { Component, Host, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    <div class = "has-background-dark">
      <div class = "container content has-text-centered has-text-white">
        <p>© 2022 United Systems & Software</p>
      </div>
    </div>
  </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
