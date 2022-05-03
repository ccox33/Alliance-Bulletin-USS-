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
  public serverView = new wjCore.CollectionView();

  //Grid Construct
  @ViewChild('flex') flex: WjFlexGrid;
  // Button Templates
  tpEditBulletinButton = CellMaker.makeButton({
    text: 'Edit',
    click: (e, ctx) => this.goToEditPage(ctx.item)
  });
  tpViewBulletinButton = CellMaker.makeButton({
    text: 'View',
    click: (e, ctx) => this.goToViewPage(ctx.item)
  });


  constructor(public router: Router, public dataServiceInput : DataService) {
    this.dataService = dataServiceInput;
  }
 
  public ngOnInit(): void {
    this.dataService.getBulletins().subscribe((res) => 
      this.serverView = new CollectionView(res, {pageSize: 25}));
  }


  //Button Functions to Link
  public goToViewPage(selectedBulletin: Bulletin): void {
    this.dataService.updateSelectedBulletin(selectedBulletin);
    this.router.navigate(['view-bulletin']);
  }

  public goToCreatePage() : void {
    const emptyBulletin: Bulletin = {
      BulletinId:0, 
      DateCreated: null, 
      Topic: "", 
      Software:"", 
      Symptom:"", 
      Resolution:"",
      Notes:"",
      Noteimage:"",
      IsDeleted:false,
      DateModified: null
    }
    this.dataService.updateSelectedBulletin(emptyBulletin);
    this.router.navigate(['create-bulletin']);
  }
  
  public goToEditPage(selectedBulletin: Bulletin) : void {
    this.dataService.updateSelectedBulletin(selectedBulletin);
    this.router.navigate(['create-bulletin']);
  }

}