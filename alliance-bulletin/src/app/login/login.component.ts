import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <section class = "hero is-fullheight">
      <form id="loginForm">
       <h1>Please Login</h1><br>
       <div style="text-align: center; ">
        <label for="username">Username:&nbsp;</label>
            <input type="text" id="username" name="username" value=""><br><br>
    
          <label for="password">Password:&nbsp;</label>
            <input type="text" id="password" name="password" value=""><br><br>

          <input class="button" type="submit" value="login">
      </div>
		  </form> 
    </section>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
