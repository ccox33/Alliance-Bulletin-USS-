import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigateBulletinsComponent } from './navigate-bulletins/navigate-bulletins.component';
import { ViewBulletinComponent } from './view-bulletin/view-bulletin.component';

const routes: Routes = [
  {path: '', component: NavigateBulletinsComponent},
  {path: ':bulletinID', component: ViewBulletinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulletinsRoutingModule { }
