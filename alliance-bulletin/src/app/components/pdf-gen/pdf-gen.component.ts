import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
//import { jsPDF } from 'jspdf';
//import { deepStrictEqual } from 'assert';

@Component({
  selector: 'app-pdf-gen',
  templateUrl: './pdf-gen.component.html',
  styleUrls: ['./pdf-gen.component.css']
})
export class PDFGenComponent implements OnInit {

  public ds : DataService;

  constructor(public datas : DataService) 
  {
    this.ds = datas;
    //this.ds.getAllSoftware().subscribe((res) => console.log(res))
  }

  ngOnInit(): void {
  }

  downloadPDF(){
    console.log('downloading pdf ...');
   // const doc = new jsPDF;

   // doc.text('Bulletin PDF', 15, 15);

    let testString: string = "";
    this.ds.getAllSoftware().subscribe((res) => testString = res)
   // doc.text(testString, 15, 50);

    //doc.save('first.pdf');
  }

}
