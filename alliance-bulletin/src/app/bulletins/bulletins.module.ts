import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { BulletinsRoutingModule } from './bulletins-routing.module';
import { NavigateBulletinsComponent } from './navigate-bulletins/navigate-bulletins.component';
import { ViewBulletinComponent } from './view-bulletin/view-bulletin.component';


@NgModule({
  declarations: [
    NavigateBulletinsComponent,
    ViewBulletinComponent
  ],
  imports: [
    CommonModule,
    BulletinsRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class BulletinsModule { }
