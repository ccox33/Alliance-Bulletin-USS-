import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";


import { Bulletin } from 'src/app/bulletin.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-bulletin',
  templateUrl: "./view-bulletin.component.html",
  styleUrls: ["./view-bulletin.component.css"]
})
export class ViewBulletinComponent implements OnInit {

  public selectedID;
  public dataService : DataService;
  public selectedBulletin : Bulletin;

  @ViewChild('mainBulletin') pdfBulletin: ElementRef;

  constructor(private route: ActivatedRoute, public dataServiceInput : DataService) 
  {
    this.dataService = dataServiceInput;
    //this.ds.getAllSoftware().subscribe((res) => console.log(res))
  }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.selectedID = id;
    if (this.selectedID > 0)
    {
      this.getBulletin(this.selectedID);
    }
  }

  getBulletin(modelID: number){

    this.dataService.getBulletin(modelID).subscribe((res) => {
      this.selectedBulletin = res;
    })

  }

  deleteBulletin(){
    if (this.selectedID > 0)
    {
      this.dataService.deleteBulletin(this.selectedID);
    }
  }

  downloadAsPDF(){
    console.log('downloading pdf ...');

    let DATA: any = document.getElementById('mainBulletin');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  copied() {
    alert("The link to this bulletin has been copied to your clipboard.");
  }
}