import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
//https://www.ag-grid.com/eula/AG-Grid-Community-License.html
import { ClipboardModule } from 'ngx-clipboard';
//https://github.com/maxisam/ngx-clipboard/blob/master/LICENSE

import { BulletinsRoutingModule } from './bulletins-routing.module';
import { NavigateBulletinsComponent } from './navigate-bulletins/navigate-bulletins.component';
import { ViewBulletinComponent } from './view-bulletin/view-bulletin.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';


@NgModule({
  declarations: [
    NavigateBulletinsComponent,
    ViewBulletinComponent
  ],
  imports: [
    CommonModule,
    BulletinsRoutingModule,
    AgGridModule.withComponents([]),
    ClipboardModule,
    WjGridModule
  ]
})
export class BulletinsModule { }
