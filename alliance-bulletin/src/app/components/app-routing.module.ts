import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBulletinComponent } from './create-bulletin/create-bulletin.component';
import { MsalGuard } from '@azure/msal-angular';
import { NavigateBulletinsComponent } from './navigate-bulletins/navigate-bulletins.component';
import { ViewBulletinComponent } from './view-bulletin/view-bulletin.component';

//Zachary Orr from the United Systems team helped with the routing module and adding the login functionality.

const routes: Routes = [
  { 
    path: '', 
    component: NavigateBulletinsComponent,
    canActivate: [MsalGuard]
  },
  { 
    path: 'navigate-bulletins', 
    component: NavigateBulletinsComponent,
    canActivate: [MsalGuard]
  },
  { 
    path: 'create-bulletin/:id', 
    component: CreateBulletinComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'view-bulletin/:id', 
    component: ViewBulletinComponent,
    canActivate: [MsalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
