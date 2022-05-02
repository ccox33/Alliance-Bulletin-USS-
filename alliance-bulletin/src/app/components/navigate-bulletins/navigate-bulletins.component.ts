import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import * as internal from 'stream';
import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.angular2.grid';
import { WjGridModule, WjFlexGrid } from '@grapecity/wijmo.angular2.grid';
import { CollectionView } from '@grapecity/wijmo'
import { Bulletin } from 'src/app/bulletin.interface';
import { DataService } from 'src/app/services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import * as wjGridFilter from '@grapecity/wijmo.grid.filter';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { CellMaker } from '@grapecity/wijmo.grid.cellmaker';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-navigate-bulletins',
  templateUrl: "./navigate-bulletins.component.html",
  styleUrls: ["./navigate-bulletins.component.css"]
})
export class NavigateBulletinsComponent {

  public dataService : DataService;
  public bulletinRes : Observable<any>;

  public serverView = new wjCore.CollectionView();

  @ViewChild('flex') flex: WjFlexGrid;

  @ViewChild('test') pdfBulletin: ElementRef;

  constructor(public router: Router, public dataServiceInput : DataService) {
    this.dataService = dataServiceInput;
    //this.dataService.getBulletins().subscribe((res) => console.log(res))
  }
 
  public ngOnInit(): void {

    this.dataService.getAllSoftware().subscribe((res) => console.log(res))

    this.fillGrid();
  }

  public fillGrid() : void {
    this.dataService.getBulletins().subscribe((res) => 
      this.serverView = new CollectionView(res, {pageSize: 25}));
    
    this.flex.beginningEdit.addHandler((s: wjcGrid.FlexGrid, e: wjcGrid.CellRangeEventArgs) => {
      e.cancel = true;
    });
  }
 
  // Button Templates
  tpViewBulletinLink = CellMaker.makeLink({
    click: (e, ctx) => this.goToViewPage(ctx.item.bulletinId)
  });
  tpEditBulletinButton = CellMaker.makeButton({
    text: 'Edit',
    click: (e, ctx) => this.goToEditPage(ctx.item.bulletinId)
  });


  public goToViewPage(selectedBulletinID: number): void {
    let selectedID = selectedBulletinID? selectedBulletinID : null;
    this.router.navigate(['view-bulletin', selectedID]);
  }

  public goToCreatePage() : void {
    this.router.navigate(['create-bulletin', 0]);
  }
  
  public goToEditPage(selectedBulletinID: number) : void {
    let selectedID = selectedBulletinID ? selectedBulletinID : null;
    this.router.navigate(['create-bulletin', selectedID]);
  }

}




