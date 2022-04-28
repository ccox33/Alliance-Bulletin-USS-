import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
//https://github.com/maxisam/ngx-clipboard/blob/master/LICENSE

import { BulletinsRoutingModule } from './bulletins-routing.module';
import { NavigateBulletinsComponent } from './navigate-bulletins/navigate-bulletins.component';
import { ViewBulletinComponent } from './view-bulletin/view-bulletin.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';


@NgModule({
  declarations: [
    NavigateBulletinsComponent,
    ViewBulletinComponent
  ],
  imports: [
    CommonModule,
    BulletinsRoutingModule,
    ClipboardModule,
    WjGridModule,
    WjGridSearchModule,
    WjGridFilterModule
  ]
})
export class BulletinsModule { }
