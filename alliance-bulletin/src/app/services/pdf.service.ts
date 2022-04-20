import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
  })
  export class PDFService {
      
    public dataService : DataService;

    constructor(public dataServiceInput : DataService) 
    {
      this.dataService = dataServiceInput;
    }
  
    ngOnInit(): void {
    }
  
    downloadPDF(){
      console.log('downloading pdf ...');
      const doc = new jsPDF;
  
      doc.text('Bulletin PDF', 15, 15);
  
      let testString: string = "";
      this.dataService.getAllSoftware().subscribe((res) => testString = res)
      doc.text(testString, 15, 50);
  
      doc.save('first.pdf');
    }
  }