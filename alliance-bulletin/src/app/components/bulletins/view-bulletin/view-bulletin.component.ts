import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { jsPDF } from 'jspdf';
import { pdfMake } from 'pdfmake/build/pdfmake';
import { pdfFonts } from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { htmlToPdfmake } from 'html-to-pdfmake';
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

  downloadAsPDF(){
    console.log('downloading pdf ...');

    const doc = new jsPDF();
    const pdfElement = this.pdfBulletin.nativeElement;
    let html = htmlToPdfmake(pdfElement.innerHTML);
    const documentDefinition = {content: html};
    
    pdfMake.createPdf(documentDefinition).open();
    //doc.save('first.pdf');
  }

  copied() {
    alert("The link to this bulletin has been copied to your clipboard.");
  }
}