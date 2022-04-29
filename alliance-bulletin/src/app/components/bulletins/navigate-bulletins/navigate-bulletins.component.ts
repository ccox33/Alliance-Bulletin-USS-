import { Component, OnInit, ViewChild } from '@angular/core';
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

  public selectedBulletinID : number;

  //this.ds.getAllSoftware().subscribe((res) => console.log(res))

  constructor(public router: Router, public dataServiceInput : DataService) {
    this.dataService = dataServiceInput;
    this.dataService.getBulletins().subscribe((res) => console.log(res))
  }
 
  public ngOnInit(): void {
    this.fillGrid();
  }

  public fillGrid() : void {
    this.dataService.getBulletins().subscribe((res) => 
    this.serverView = new CollectionView(res, {}));
  }

  // Example data of bulletin Row.
  rowData = [
      { date: '11/20/2019', id: '01', subject: 'Problem with main software, bug in code.', software: "D0152 v3.4, D88521 v1.2, D52365 v2.0" },
      { date: '11/25/2021', id: '02', subject: 'A problem with main software, bug in code.', software: "D0052 v3.4, D88521 v1.2, D52365 v2.0" },
      { date: '11/25/2020', id: '25', subject: 'Another problem with main software, bug in code.', software: "D6652 v3.4, D88521 v1.2, D52365 v2.0" },
      { date: '11/23/2021', id: '03', subject: 'Big problem with main software, bug in code.', software: "D0752 v3.4, D88521 v1.2, D52365 v2.0" }
  ];
 
  public goToCreatePage() : void {
    let selectedID = this.selectedBulletinID ? this.selectedBulletinID : null;
    this.router.navigate(['create-bulletin', 0]);
    
  }
  
  public goToEditPage() : void {
    let selectedID = this.selectedBulletinID ? this.selectedBulletinID : null;
    this.router.navigate(['create-bulletin', selectedID]);
  }

}




