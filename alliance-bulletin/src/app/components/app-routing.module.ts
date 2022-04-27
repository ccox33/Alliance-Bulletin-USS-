import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateBulletinComponent } from './create-bulletin/create-bulletin.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'create-bulletin', component: CreateBulletinComponent },
  { path: 'navigate-bulletins', loadChildren: () => import('./bulletins/bulletins.module').then(m => m.BulletinsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
