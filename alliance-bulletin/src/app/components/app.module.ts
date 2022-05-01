import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CreateBulletinComponent } from './create-bulletin/create-bulletin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalGuard, MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';

import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
//https://github.com/maxisam/ngx-clipboard/blob/master/LICENSE

import { NavigateBulletinsComponent } from './navigate-bulletins/navigate-bulletins.component';
import { ViewBulletinComponent } from './view-bulletin/view-bulletin.component';

import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateBulletinComponent,
    NavigateBulletinsComponent,
    ViewBulletinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSummernoteModule,
    HttpClientModule,
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: 'c0c60ca5-16c3-44e8-8c9a-5477e9b9364b',
        authority: 'https://login.microsoftonline.com/f1fa27a3-c841-4197-b197-c24aebd04c50',
        redirectUri: 'http://localhost:4200/navigate-bulletins'
      },
      cache: {
        cacheLocation: 'localStorage'
      }
    }), {
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: ['user.read']
      }
  }, {
    interactionType: InteractionType.Redirect,
    protectedResourceMap: new Map([
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
    ])
  }),
    WjGridModule,
    CommonModule,
    ClipboardModule,
    WjGridSearchModule,
    WjGridFilterModule,
    NoopAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
