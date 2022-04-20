import { Component, OnInit } from '@angular/core';
import { Bulletin } from 'src/app/bulletin.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-bulletin',
  templateUrl: "./view-bulletin.component.html",
  styleUrls: ["./view-bulletin.component.css"]
})
export class ViewBulletinComponent implements OnInit {

  public dataService : DataService;
  public testBulletin : Bulletin;

  constructor(public dataServiceInput : DataService) 
  {
    this.dataService = dataServiceInput;
    //this.ds.getAllSoftware().subscribe((res) => console.log(res))
  }

  ngOnInit(): void {
  }

  getBulletin(modelID: number){

    this.dataService.getBulletin(modelID).subscribe((res) => {
      this.testBulletin = res;
    })

  }
}